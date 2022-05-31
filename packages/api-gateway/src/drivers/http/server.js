// External dependencies
const Autoload = require('@fastify/autoload');
const Fastify = require('fastify');
const FastifyAuth0 = require('fastify-auth0-verify');
const path = require('path');
const Swagger = require('@fastify/swagger');

// Internal dependencies
const authDecorators = require('./decorators/auth');
const configAuth = require('../../../config/auth0');
const swaggerOptions = require('./utils/swagger');

// Setup
const isTestEnv = process.env.NODE_ENV === 'test';

const fastify = Fastify({
  // Disable logs in test environment
  logger: !isTestEnv,
});

// Avoid loading swagger when running tests
if (!isTestEnv) {
  // Swagger needs to be loaded before the routes
  fastify.register(Swagger, swaggerOptions);
}

fastify.register(FastifyAuth0, {
  domain: configAuth.domain,
  audience: configAuth.audience,
});

// Decorators for authorization
fastify.decorate('hasPermissions', authDecorators.hasPermissions);
fastify.decorate('hasRole', authDecorators.hasRole);

fastify.register(Autoload, {
  dir: path.join(__dirname, 'routes'),
  ignorePattern: /.*(schema).*/,
});
fastify.register(Autoload, { dir: path.join(__dirname, 'plugins') });

async function start() {
  try {
    await fastify.listen(process.env.SERVER_PORT || 3001, '0.0.0.0');
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
