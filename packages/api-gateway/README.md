# `@booking-services/api-gateway`

> API Gateway is a package that provides a RESTful API for the Booking Services.

# Table of Content
- [Features](#features)
- [Installation And Usage](#installation-and-usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Utils](#utils)
  - [Add a new endpoint](#add-a-new-endpoint)
  - [Protect an endpoint](#protect-an-endpoint)

## Features
- Fastify
- Swagger

## Installation And Usage
1. Install the dependencies
```bash
yarn install
```

2. Run the server
```bash
yarn start:dev
```

## API Documentation
This API is documented using Swagger. You can find the documentation inside `/docs`.

- Local: `http://localhost:3000/docs`
- Public: TODO: Add public URL

## Testing
TODO: Add testing instructions

## Utils

### Add a new endpoint
Since we are using swagger to document the API, we recommend you to create a schema for each route and add the following properties to the schema:

1. **description**: A brief description of the endpoint.

2. **tags**: Tags are used to group endpoints in the documentation. You can choose between the following tags: `Math`, `Status`, `Search Engine`, `Geolocation`, `Booking`, `Core`, `Users`, `Notifications`, `Messages`, `Places`, `Administration panel`.

3. **security**: Security is used to specify the authentication method. You can skip this property if you don't need authentication.

Example:
```js
const schema = {
  description: 'Get messages',
  tags: ['Messages'],
  security: [
    {
      Bearer: [],
    },
  ],
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The id of the message',
          },
          message: {
            type: 'string',
            description: 'The message',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'The date of the message',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'The date of the message',
          },
          createdBy: {
            type: 'string',
            description: 'The user who created the message',
          },
        },
      },
    },
  },
};

fastify.get('/messages', {
  schema,
  handler: messagesServices.getMessages,
});
```
### Protect an endpoint

There are three ways to protect an endpoint:
1) That the user is authenticated
2) By user permissions
3) By user roles.

The protections are added to the hooks and, if necessary, the conditions to be met are passed as parameters.

#### Protect the endpoint only for authenticated users.
Just add the `preValidation` hook in the path you want to protect.

```js
fastify.get('/', {
  handler: authAdapters.getPrivate,
  schema: authEndpointsStatusSchema,
  preValidation: fastify.authenticate,
});
```

#### Protect the endpoint only for users with permissions.
The `preHandler` hook is sent to the decorator in charge of protection. In this case it is called `hasPermissions`, which receives as parameters a list of those permissions that can access the endpoint, if the user `has at least one` hasPermission from the list it continues with the logic, otherwise it returns a `403 error`.


```js
fastify.get('/', {
  schema: authEndpointsStatusSchema,
  handler: authAdapters.getPrivateScoped,
  preHandler: fastify.hasPermissions([
    'another:a',
    'another:b',
    'place:create',
  ])
});
```

#### Protect the endpoint only for users with the role.
The `preHandler` hook is sent to the decorator in charge of protection. In this case it is called `hasRole`, which receives as parameters a list of those roles that can access the endpoint, if the user `has at least one` role from the list it continues with the logic, otherwise it returns a `401 error`.

```js
fastify.get('/', {
  schema: authEndpointsStatusSchema,
  handler: authAdapters.getPrivateScoped,
  preValidation: fastify.authenticate,
  preHandler: fastify.hasRole([
    'anfitrion',
    'another',
    'host',
    'tester',
  ]),
});
```

#### Protecting the end point with everything
The decorators are added to the `preHandler` hook list. The priority is taken in cascade form so that if a decorator marks error the following ones will not be executed.

```js
fastify.get('/', {
  schema: authEndpointsStatusSchema,
  handler: authAdapters.getPrivateScoped,
  preValidation: fastify.authenticate,
  preHandler: [
    fastify.hasPermissions([
      'another:a',
      'another:b',
      'place:create',
    ]),
    fastify.hasRole([
      'anfitrion',
      'another',
      'host',
      'tester',
    ]),
  ],
});
```
