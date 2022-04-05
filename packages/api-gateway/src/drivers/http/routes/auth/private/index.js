'use strict';

// Internal dependencies
const { authAdapters } = require('../../../adapters');

/** @type {import('fastify').FastifyPluginCallback} */
function main(fastify, _, done) {
  // Register routes
  fastify.get('/', {
    handler: authAdapters.private,
    preValidation: fastify.authenticate
  });

  done();
}

module.exports = main;
