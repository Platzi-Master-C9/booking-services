// Internal dependencies
const { Logger } = require('@booking-services/shared');
const validator = require('validator');

/**
 * @param {import('mongoose').Model} ChatModel Chat model
 * @returns {(props: { chatId: string }) => Promise<unknown | null>}
 */
const getChatRoom = (ChatModel) => {
  if (!ChatModel) {
    Logger.error('[messages]: Chat Model dependency has not been injected.');
    throw new Error('Chat Model is required');
  }

  return async ({ hostId, customerId, placeId }) => {
    if (!validator.isMongoId(hostId)) {
      Logger.error('[messages]: Host ID is not valid.');
      throw new Error('Host ID is not valid');
    }

    if (!validator.isMongoId(customerId)) {
      Logger.error('[messages]: Customer ID is not valid.');
      throw new Error('Customer ID is not valid');
    }

    if (!validator.isMongoId(placeId)) {
      Logger.error('[messages]: Place ID is not valid.');
      throw new Error('Place ID is not valid');
    }

    // Query
    /** @type {Record<string, 0 | 1>} */
    const fields = {
      _id: 1,
      placeId: 1,
      hostId: 1,
      customerId: 1,
      createdAt: 1,
      updatedAt: 1,
    };

    /** @type {import('mongoose').FilterQuery<unknown>} */
    const filterOptions = {
      placeId,
      hostId,
      customerId,
      deletedAt: null,
    };

    /** @type {import('mongoose').QueryOptions} */
    const queryOptions = {
      lean: true,
    };

    let chat;
    Logger.info('[chat-rooms]: Getting chat room');
    try {
      chat = await ChatModel.findOne(
        filterOptions,
        fields,
        queryOptions,
      );
    } catch (error) {
      Logger.error(`[chat-rooms]: ${error.message}`);
    }

    return chat || null;
  };
};

module.exports = getChatRoom;
