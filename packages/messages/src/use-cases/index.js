// Internal dependencies
const makeListUserChatsService = require('./list-user-chats');
const makeGetChatRoomLastMessage = require('./get-last-message-of-chat-room');
const makeListChatMessages = require('./list-chat-messages');

module.exports = {
  makeListUserChatsService,
  makeGetChatRoomLastMessage,
  makeListChatMessages,
};
