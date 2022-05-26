// Internal dependencies
const { Logger } = require('@booking-services/shared');

/**
 * Returns the list of messages of a chat room.
 * List of messages is sorted by creation date and limited to the last 100 messages.
 *
 * It will throw an error if the message model dependency has not been injected.
 *
 * @param {import('mongoose').Model} MessageModel Message model
 * @returns {(props: { chatId: string, page: number }) => Promise<{
 *    pages: number,
 *    messages: unknown[]
 * }>}
 */
const listChatMessages = (MessageModel) => {
  if (!MessageModel) {
    Logger.error('[messages]: Message Model dependency has not been injected.');
    throw new Error('Message Model is required');
  }

  return async ({ chatId, page }) => {
    // Validate chat id
    if (typeof chatId !== 'string' || !chatId) {
      Logger.error('[messages]: Chat Room ID has not been provided.');
      throw new Error('Chat room ID is required');
    }

    // Validate page
    if (!Number.isInteger(page) || page < 1) {
      const errorMessage = 'Page must be a positive integer greater than 0';

      Logger.error(`[messages]: ${errorMessage}`);
      throw new Error(errorMessage);
    }
    // Query
    /** @type {Record<string, 0 | 1>} */
    const fields = {
      _id: 1,
      chatId: 1,
      text: 1,
      createdAt: 1,
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
      lean: true,
      skip: (page - 1) * 10,
      limit: 10,
    };

    let pages = 0;
    let messages = [];
    Logger.info(`[messages]: Getting messages of chat room #${chatId}`);
    try {
      // find with pagination
      const [count, response] = await Promise.all([
        MessageModel.countDocuments(filterOptions),
        MessageModel.find(
          filterOptions,
          fields,
          queryOptions,
        ),
      ]);

      if (response) {
        pages = Math.ceil(count / 10);
        messages = response;
      }
    } catch (error) {
      Logger.error(`[messages]: Error fetching messages of chat room #${chatId}`, error);
    }

    return {
      pages,
      messages,
    };
  };
};

module.exports = listChatMessages;
