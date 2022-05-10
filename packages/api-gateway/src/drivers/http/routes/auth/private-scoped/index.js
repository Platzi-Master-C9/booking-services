// Internal dependencies
const { authEndpointsStatusSchema } = require('./schema');
const { authAdapters } = require('../../../adapters');

/** @type {import('fastify').FastifyPluginCallback} */
function main(fastify, _, done) {
  // Register routes
  fastify.get('/', {
    schema: authEndpointsStatusSchema,
    handler: authAdapters.getPrivateScoped,
    preValidation: fastify.authenticate,
    preHandler: [
      fastify.hasPermissions([
        'place:create',
        'another:a',
        'another:b',
      ]),
      fastify.hasRole([
        'anfitrion',
        'tester',
        'another',
      ]),
    ],
  });

  done();
}

module.exports = main;
