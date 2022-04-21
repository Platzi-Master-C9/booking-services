// External dependencies
const Fastify = require('fastify');
const Autoload = require('fastify-autoload');
const Swagger = require('fastify-swagger');
const path = require('path');

// Internal dependencies
const { version } = require('../../../package.json');

// Setup
const isTestEnv = process.env.NODE_ENV === 'test';

const fastify = Fastify({
  // Disable logs in test environment
  logger: !isTestEnv,
});

/** @type {import('fastify-swagger').SwaggerOptions} */
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
      { name: 'Admininistration panel', description: 'Admininistration panel endpoints' },
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

// Avoid loading swagger when running tests
if (!isTestEnv) {
  // Swagger needs to be loaded before the routes
  fastify.register(Swagger, swaggerOptions);
}

fastify.register(Autoload, { dir: path.join(__dirname, 'routes') });
fastify.register(Autoload, { dir: path.join(__dirname, 'plugins') });

async function start() {
  try {
    await fastify.listen(process.env.SERVER_PORT || 3000, '0.0.0.0');
  } catch (error) {
    fastify.log.error(
      `[http-server]: Error with message ${error.message} has happened`,
    );
    process.exit(1);
  }
}

module.exports = {
  start,
  fastify,
};
