const { version } = require('../../../../package.json');

/** @type {import('@fastify/swagger').SwaggerOptions} */
const swaggerOptions = {
  routePrefix: '/docs',
  openapi: {
    info: {
      title: 'Booking API Gateway',
      description: 'API Gateway for Booking Services',
      version,
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'Math', description: 'Math endpoints' },
      { name: 'Status', description: 'Status endpoints' },
      { name: 'Search Engine', description: 'Search Engine endpoints' },
      { name: 'Geolocation', description: 'Geolocation endpoints' },
      { name: 'Booking', description: 'Booking endpoints' },
      { name: 'Core', description: 'Core endpoints' },
      { name: 'Users', description: 'User endpoints' },
      { name: 'Notifications', description: 'Notification endpoints' },
      { name: 'Messages', description: 'Messages endpoints' },
      { name: 'Places', description: 'Places endpoints' },
      { name: 'Administration panel', description: 'Administration panel endpoints' },
      { name: 'Auth', description: 'Auth endpoints' },
    ],
    components: {
      securitySchemes: {
        Bearer: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  },
  exposeRoute: true,
};

module.exports = swaggerOptions;
