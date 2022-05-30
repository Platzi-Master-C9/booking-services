// External dependencies
const { Logger } = require('@booking-services/shared');
const validator = require('validator');

// Internal dependencies
const { bulkValidation, isString } = require('../utils/validator');

/**
 * @param {import('mongoose').Model} MessageModel Message model
 */
const createMessage = (MessageModel) => {
  if (!MessageModel) {
    Logger.error('[messages]: Message Model dependency has not been injected.');
    throw new Error('MessageModel is required');
  }

  return async ({
    chatId,
    text,
    createdBy,
  }) => {
    bulkValidation([
      // Validate chatId
      { value: chatId, validatorFn: isString, errorMessage: 'Chat ID required' },
      { value: chatId, validatorFn: validator.isMongoId, errorMessage: 'Chat ID is not valid' },
      // Validate text
      { value: text, validatorFn: isString, errorMessage: 'Text message is required' },
      {
        value: text, validatorFn: validator.isLength, errorMessage: 'Invalid text message', options: { min: 1, max: 1000 },
      },
      // Validate createdBy
      { value: createdBy, validatorFn: isString, errorMessage: 'Created by is required' },
      { value: chatId, validatorFn: validator.isMongoId, errorMessage: 'Created by is not valid' },
    ]);

    let message = null;

    try {
      Logger.info(`[messages]: Creating message for chat room #${chatId}`);

      // Create message
      message = await MessageModel.create({
        chatId,
        text,
        createdBy,
      });
      message = message.toObject();
    } catch (error) {
      Logger.error('[messages]: Error creating message', error);
    }

    return message;
  };
};

module.exports = createMessage;
