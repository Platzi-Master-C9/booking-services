const { events } = require('../../../utils/constants');

const sendMessage = (socket, message) => {
  socket.join(message.chatId);
  socket.to(message.chatId).emit(events.NEW_MESSAGE, message);
};

module.exports = sendMessage;
