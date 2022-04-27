// Internal dependencies
const { authEndpointsStatusSchema } = require('./schema');
const { authAdapters } = require('../../../adapters');

/** @type {import('fastify').FastifyPluginCallback} */
function status(fastify, _, done) {
  // Register routes
  fastify.get('/', {
    schema: authEndpointsStatusSchema,
    handler: authAdapters.getPrivateScoped,
    preValidation: fastify.authenticate,
    preHandler: fastify.hasPermissions(['create:roles', 'delete:roles']),
    // preHandler: fastify.hasRole(['admin', 'tester']),
  });

  done();
}

module.exports = status;
