// Internal dependencies
const { makePagination } = require('../../utils/pagination');

/**
 * List the chat rooms of the requesting user.
 * @type {import('fastify').RouteHandler}
 */
async function listUserChatRooms(req, reply) {
  // TODO: Replace this when bearer token is implemented.
  const user = { _id: '1' };

  // Get page
  const { page } = req.query;

  req.log.info('[http-server]: Listing user chat rooms.');

  // Get the last 10 chat rooms
  const { pages, chats } = await this.messageServices.listUserChats({ user, page });

  const chatsHashMap = {};
  chats.forEach((chat, index) => {
    // eslint-disable-next-line no-underscore-dangle
    chatsHashMap[chat._id] = index;
  });

  req.log.info('[http-server]: Fetching last message of each chat rooms.');
  const messagessAsyncQueue = [];
  // Get the last 10 messages
  chats.forEach((chat) => {
    messagessAsyncQueue.push(
      this.messageServices.getChatRoomLastMessage({ chatId: chat._id }),
    );
  });

  const messages = await Promise.all(messagessAsyncQueue);

  // Map the messages to the chat rooms
  messages.forEach((message) => {
    chats[chatsHashMap[message.chatId]].lastMessage = message;
  });

  const paginatedResult = makePagination(page, pages, chats);

  return reply.code(200).send(paginatedResult);
}

module.exports = {
  listUserChatRooms,
};
