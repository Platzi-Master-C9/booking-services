// Internal dependencies
const { makePagination } = require('../../utils/pagination');

/**
 * List the chat rooms of the requesting user.
 * @type {import('fastify').RouteHandler}
 */
async function listUserChatRooms(req, reply) {
  const { page, userId } = req.query;

  // TODO: Replace this when bearer token is implemented.
  const user = { _id: userId || '1' };

  req.log.info('[http-server]: Listing user chat rooms.');

  // Get the last 10 chat rooms
  const { pages, chats } = await this.messageServices.listUserChats({ user, page });

  const chatsHashMap = {};
  chats.forEach((chat, index) => {
    // eslint-disable-next-line no-underscore-dangle
    chatsHashMap[chat._id.toString()] = index;
    // Set last message to default value
    // eslint-disable-next-line no-param-reassign
    chat.lastMessage = null;
  });

  req.log.info('[http-server]: Fetching last message of each chat rooms.');
  const messagesAsyncQueue = [];
  // Get the last 10 messages
  chats.forEach((chat) => {
    messagesAsyncQueue.push(
      this.messageServices.getChatRoomLastMessage({ chatId: chat._id.toString() }),
    );
  });

  const messages = await Promise.all(messagesAsyncQueue);

  // Map the messages to the chat rooms
  messages.forEach((message) => {
    // Message can be null if the chat room has no messages
    if (message) {
      chats[chatsHashMap[message.chatId.toString()]].lastMessage = message;
    }
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
  const { page, userId } = req.query;

  // TODO: Replace this when bearer token is implemented.
  const user = { _id: userId || '1' };

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

/**
 * @type {import('fastify').RouteHandler}
 */
async function openChatRoom(req, reply) {
  const { hostId, customerId, placeId } = req.body;

  let isNew = false;
  let chat;

  try {
    chat = await this.messageServices.getChatRoom({
      hostId,
      customerId,
      placeId,
    });
  } catch (error) {
    reply.status(400);
    req.log.error('[http-server]: Error while getting chat room.', error);
    throw error;
  }

  // If chat room does not exist, create it
  if (!chat) {
    req.log.info('[http-server]: Chat room does not exist.');
    try {
      req.log.info(`[http-server]: creating chat room for place ${placeId}`);
      chat = await this.messageServices.createChatRoom({
        hostId,
        customerId,
        placeId,
      });

      if (chat === null) {
        reply.status(500);
        req.log.error('[http-server]: Chat room creation failed.');
        throw new Error('Chat room could not be created.');
      }

      isNew = true;
    } catch (error) {
      reply.status(400);
      req.log.error('[http-server]: Chat room creation failed.', error);
      throw error;
    }
  }

  return reply.code(isNew ? 201 : 200).send(chat);
}

/**
 * Create message in a chat room.
 * @type {import('fastify').RouteHandler}
 */
async function createMessage(req, reply) {
  const { chatId } = req.params;
  const {
    text,
    createdBy,
  } = req.body;

  req.log.info(`[http-server]: validating chat ${chatId} against user ${createdBy}`);
  const chatIsRelatedToUser = await this.messageServices.isChatRelatedToUser({
    chatId,
    userId: createdBy,
  });

  if (!chatIsRelatedToUser) {
    req.log.info(`[http-server]: Chat ${chatId} is not related to user ${createdBy}.`);
    return reply.callNotFound();
  }

  let message;
  try {
    message = await this.messageServices.createMessage({
      chatId,
      text,
      createdBy,
    });

    if (!message) {
      return reply.code(500).send(new Error('Could not create message.'));
    }
  } catch (error) {
    req.log.error(`[http-server]: Error creating message: ${error.message}`);
    reply.code(400);
    throw error;
  }

  return reply.code(201).send(message);
}

module.exports = {
  listUserChatRooms,
  listChatMessages,
  openChatRoom,
  createMessage,
};
