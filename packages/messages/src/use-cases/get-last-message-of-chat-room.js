// Internal dependencies
const logger = require('../utils/logger');

/**
 * @param {import('mongoose').Model} messageModel Message model
 * @returns {(props: { chatId: string }) => Promise<unknow | null>}
 */
const getLastMessageOfChatRoom = (messageModel) => async ({ chatId }) => {
  if (!messageModel) {
    logger.error('[messages]: Message Model dependency has not been injected.');
    throw new Error('Message Model is required');
  }

  if (typeof chatId !== 'string' || !chatId) {
    logger.error('[messages]: Chat Room ID has not been provided.');
    throw new Error('Chat room ID is required');
  }

  // Query

  /** @type {{[key: string]: 0 | 1}} */
  const fields = {
    _id: 1,
    chatId: 1,
    text: 1,
    createdAt: 1,
    deletedAt: 0,
    createdBy: 1,
  };

  /** @type {import('mongoose').FilterQuery<unknown>} */
  const filterOptions = {
    chatId,
    deletedAt: null,
  };

  /** @type {import('mongoose').QueryOptions} */
  const queryOptions = {
    sort: { createdAt: -1 },
    rawResult: true,
  };

  let message;
  logger.info(`[messages]: Getting last message of chat room #${chatId}`);

  try {
    message = await messageModel.findOne(
      filterOptions,
      fields,
      queryOptions,
    );
  } catch (error) {
    logger.error(`[messages]: Error fetching last message of chat room #${chatId}`, error);
  }

  return message || null;
};

module.exports = getLastMessageOfChatRoom;
