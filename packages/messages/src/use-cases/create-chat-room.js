// External dependencies
const { Logger } = require('@booking-services/shared');
const validator = require('validator');

/**
 * @param {import('mongoose').Model} ChatModel Chat model
 */
const createChatRoom = (ChatModel) => {
  if (!ChatModel) {
    Logger.error('[chat-rooms]: Chat Room Model dependency has not been injected.');
    throw new Error('Chat Room Model is required');
  }

  return async ({ hostId, placeId, customerId }) => {
    if (!validator.isMongoId(hostId)) {
      Logger.error('[messages]: Host ID is not valid.');
      throw new Error('Host ID is not valid');
    }

    if (!validator.isMongoId(placeId)) {
      Logger.error('[messages]: Place ID is not valid.');
      throw new Error('Place ID is not valid');
    }

    if (!validator.isMongoId(customerId)) {
      Logger.error('[messages]: Customer ID is not valid.');
      throw new Error('Customer ID is not valid');
    }

    if (hostId === customerId) {
      Logger.error('[messages]: Host ID and Customer ID cannot be the same.');
      throw new Error('Host ID and Customer ID cannot be the same');
    }

    let chat = null;
    try {
      chat = await ChatModel.create({
        hostId,
        placeId,
        customerId,
      });
      chat = chat.toObject();
    } catch (error) {
      Logger.error(`[chat-rooms]: ${error.message}`);
    }

    return chat;
  };
};

module.exports = createChatRoom;
