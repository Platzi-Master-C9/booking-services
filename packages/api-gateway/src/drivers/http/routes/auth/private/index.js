// Internal dependencies
const { authEndpointsStatusSchema } = require('./schema');
const { authAdapters } = require('../../../adapters');

/** @type {import('fastify').FastifyPluginCallback} */
function main(fastify, _, done) {
  // Register routes
  fastify.get('/', {
    handler: authAdapters.getPrivate,
    schema: authEndpointsStatusSchema,
    preValidation: fastify.authenticate,
  });

  done();
}

module.exports = main;
