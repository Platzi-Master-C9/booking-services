// Internal dependencies
const { messageAdapters } = require('../../adapters');
const {
  listChatRoomsSchema,
  listChatMessagesSchema,
  openChatSchema,
  createMessageSchema,
} = require('./schema');

/** @type {import('fastify').FastifyPluginCallback} */
function chatRouter(fastify, _options, done) {
  // Register routes
  fastify.get('/', {
    schema: listChatRoomsSchema,
    handler: messageAdapters.listUserChatRooms,
  });

  fastify.get('/:chatId/messages', {
    schema: listChatMessagesSchema,
    handler: messageAdapters.listChatMessages,
  });

  fastify.post('/', {
    schema: openChatSchema,
    handler: messageAdapters.openChatRoom,
  });

  fastify.post('/:chatId/messages', {
    schema: createMessageSchema,
    handler: messageAdapters.createMessage,
  });

  done();
}

module.exports = chatRouter;
