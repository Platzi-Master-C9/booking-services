// Internal dependencies
const { statusAdapters } = require('../../adapters');
const { serveStatusSchema } = require('./schema');

/** @type {import('fastify').FastifyPluginCallback} */
function status(fastify, _, done) {
  // Register routes
  fastify.get('/', {
    schema: serveStatusSchema,
    handler: statusAdapters.liveness,
  });

  done();
}

module.exports = status;
