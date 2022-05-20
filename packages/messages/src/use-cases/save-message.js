// External dependencies
const { Logger } = require('@booking-services/shared');

const saveMessage = (MessageModel) => async ({
  chatId,
  text,
}) => {
  if (!MessageModel) {
    Logger.error('[saveMessage]: Messages Model has not been injected');
    throw new Error('Message model is needed');
  }

  if (typeof chatId !== 'string' || !chatId) {
    Logger.error('[saveMessage]: Chat Id has not been provided');
    throw new Error('Chat ID is needed');
  }

  if (typeof text !== 'string' || !text) {
    Logger.error('[saveMessage] Text content has not been needed');
    throw new Error('[saveMessage]: Text content is needed');
  }

  const message = new MessageModel({
    chatId,
    text,
  });

  return message.save()
    .catch((error) => Logger.error(`[saveMessage] something went wrong saving message ${error}`));
};

module.exports = saveMessage;
