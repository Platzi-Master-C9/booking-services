// Internal dependencies
const { authAdapters } = require('../../../adapters');

/** @type {import('fastify').FastifyPluginCallback} */
function main(fastify, _, done) {
  // Register routes
  fastify.get('/', {
    handler: authAdapters.getPrivate,
    preValidation: fastify.authenticate,
  });

  done();
}

module.exports = main;
