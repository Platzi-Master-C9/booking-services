// External dependencies
const { Logger } = require('@booking-services/shared');

/**
 * Checks if the chat is related to the user.
 *
 * @param {import('mongoose').Model} ChatModel Chat model
 * @returns {(props: { userId: string, chatId: string }) => Promise<boolean>}
 */
const isChatRelatedToUser = (ChatModel) => {
  if (!ChatModel) {
    Logger.error('[messages]: Message Model dependency has not been injected.');
    throw new Error('ChatModel is required');
  }

  return async ({ userId, chatId }) => {
    // Validate input data
    if (!userId) {
      Logger.error('[messages]: User ID has not been provided.');
      throw new Error('userId is required');
    }

    if (!chatId) {
      Logger.error('[messages]: Chat ID has not been provided.');
      throw new Error('chatId is required');
    }

    let exists = false;

    try {
      Logger.info(`[messages]: Checking if chat room #${chatId} is related to user #${userId}`);

      // Check if chat room is related to user
      exists = await ChatModel.exists({
        _id: chatId,
        $or: [{
          customerId: userId,
        }, {
          hostId: userId,
        }],
      });
    } catch (error) {
      Logger.error('[messages]: Error checking if chat room is related to user', error);
    }

    return exists;
  };
};

module.exports = isChatRelatedToUser;
