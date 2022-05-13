# `@booking-services/api-gateway`

> API Gateway is a package that provides a RESTful API for the Booking Services.

# Table of Content
- [Features](#features)
- [Installation And Usage](#installation-and-usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Utils](#utils)
  - [Add a new endpoint](#add-a-new-endpoint)

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
