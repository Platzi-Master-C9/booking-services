// Internal dependencies
const { Logger } = require('@booking-services/shared');

/**
 * @param {import('mongoose').Model} chatModel Chat model
 * @returns {
 *  (props: { user: { _id: string }; page: number }) => Promise<{
 *    pages: number;
 *    result: unknown[]
 *  }>
 * }
 */
const listUserChats = (chatModel) => async ({
  user,
  page,
}) => {
  // Validate user
  if (!Object.prototype.hasOwnProperty.call(user, '_id')) {
    const errorMessage = 'User does not contain the property "_id"';

    Logger.error(`[messages]: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  // Validate page
  if (!Number.isInteger(page) || page < 1) {
    const errorMessage = 'Page must be a positive integer greater than 0';

    Logger.error(`[messages]: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  Logger.info(`[messages]: Listing chats for user ${user._id}`);

  let chats = [];
  let pages = 0;

  try {
    /** @type {import('mongoose').FilterQuery<unknown>} */
    const query = {
      $or: [{ hostId: user._id }, { customerId: user._id }],
      deletedAt: null,
    };

    /** @type {import('mongoose').QueryOptions} */
    const options = {
      skip: (page - 1) * 10,
      limit: 10,
      sort: { updatedAt: -1 },
      lean: true,
    };

    /** @type {Record<string, 0 | 1>} */
    const fields = {
      _id: 1,
      placeId: 1,
      hostId: 1,
      customerId: 1,
      createdAt: 1,
      updatedAt: 1,
    };

    // Find with pagination
    const [count, response] = await Promise.all([
      chatModel.countDocuments(query),
      chatModel.find(query, fields, options),
    ]);

    if (response) {
      pages = Math.ceil(count / 10);
      chats = response;
    }
  } catch (error) {
    Logger.error('[messages]: Error listing chats', error);
  }

  return {
    pages,
    chats,
  };
};

module.exports = listUserChats;
