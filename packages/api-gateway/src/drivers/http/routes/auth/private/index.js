'use strict';

// Internal dependencies
const { authAdapters } = require('../../../adapters');

/** @type {import('fastify').FastifyPluginCallback} */
function status(fastify, _, done) {
  // Register routes
  fastify.get('/', {
    handler: authAdapters.private,
  });

  done();
}

module.exports = status;
