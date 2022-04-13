const Logger = require('../utils/logger');

// eslint-disable-next-line func-names
const createChat = (model) => async function ({
  hostId, customerId, messageId, place,
}) {
  if (hostId || customerId || messageId || place) {
    Logger.error('[chat]: Plase enter the info: ', {
      hostId, customerId, messageId, place,
    });

    throw new Error('Inputs must be numbers');
  }

  Logger.info('[chat]: Creating new chat in process.');

  const chat = await model.create({
    hostId,
    customerId,
    messageId,
    place,
  }).then(() => Logger.debug('[chat]: Chat created successfully'))
    .catch((err) => Logger.error(`[chat]: Chat creation error ${err.message}`));

  return chat;
};

module.exports = {
  createChat,
};
