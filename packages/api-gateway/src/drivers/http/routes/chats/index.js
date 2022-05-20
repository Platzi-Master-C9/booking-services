// Internal dependencies
const { messageAdapters } = require('../../adapters');
const {
  listChatRoomsSchema,
  listChatMessagesSchema,
  saveNewMessageSchema,
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

  fastify.post('/:chatId/messages', {
    schema: saveNewMessageSchema,
    handler: messageAdapters.saveNewMessage,
  });

  done();
}

module.exports = chatRouter;
