const { events } = require('../../../utils/constants');

const sendMessage = (socket, chatId, message) => {
  socket.join(chatId);
  socket.to(chatId).emit(events.NEW_MESSAGE, message);
};

module.exports = sendMessage;
