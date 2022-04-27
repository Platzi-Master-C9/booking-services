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
    // eslint-disable-next-line no-undef
    preHandler: [fastify.hasPermissions(['create:roles', 'delete:roles']), fastify.hasRole(['admin', 'tester'], ignore = true)],
  });

  done();
}

module.exports = status;
