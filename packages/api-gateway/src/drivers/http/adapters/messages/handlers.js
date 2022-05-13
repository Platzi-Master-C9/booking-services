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
  const messagesAsyncQueue = [];
  // Get the last 10 messages
  chats.forEach((chat) => {
    messagesAsyncQueue.push(
      this.messageServices.getChatRoomLastMessage({ chatId: chat._id }),
    );
  });

  const messages = await Promise.all(messagesAsyncQueue);

  // Map the messages to the chat rooms
  messages.forEach((message) => {
    chats[chatsHashMap[message.chatId]].lastMessage = message;
  });

  const paginatedResult = makePagination(page, pages, chats);

  return reply.code(200).send(paginatedResult);
}

/**
 * List the messages of a user chat room.
 * @type {import('fastify').RouteHandler}
 */
async function listChatMessages(req, reply) {
  const { chatId } = req.params;
  const { page } = req.query;

  // TODO: Replace this when bearer token is implemented.
  const user = { _id: '1' };

  req.log.info(`[http-server]: validating chat ${chatId} against user ${user._id}`);
  const chatIsRelatedToUser = await this.messageServices.isChatRelatedToUser({
    chatId,
    userId: user._id,
  });

  if (!chatIsRelatedToUser) {
    req.log.info(`[http-server]: Chat ${chatId} is not related to user ${user._id}.`);
    return reply.callNotFound();
  }

  req.log.info('[http-server]: Listing chat messages.');
  const { pages, messages } = await this.messageServices.listChatMessages({
    chatId,
    page,
  });

  const paginatedResult = makePagination(page, pages, messages);

  return reply.code(200).send(paginatedResult);
}

module.exports = {
  listUserChatRooms,
  listChatMessages,
};
