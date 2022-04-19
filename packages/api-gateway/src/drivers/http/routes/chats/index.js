// Internal dependencies
const { messageAdapters } = require('../../adapters');
const { listChatRoomsSchema } = require('./schema');

/** @type {import('fastify').FastifyPluginCallback} */
function chatRouter(fastify, _options, done) {
  // Register routes
  fastify.get('/', {
    schema: listChatRoomsSchema,
    handler: messageAdapters.listUserChatRooms,
  });

  done();
}

module.exports = chatRouter;
