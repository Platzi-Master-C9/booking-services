// Internal dependencies
const makeListUserChatsService = require('./list-user-chats');
const makeGetChatRoomLastMessage = require('./get-last-message-of-chat-room');
const makeListChatMessages = require('./list-chat-messages');
const makeIsChatRelatedToUser = require('./is-chat-related-to-user');
const makeCreateChatRoom = require('./create-chat-room');
const makeGetChatRoom = require('./get-chat-room');
const makeCreateMessage = require('./create-message');

module.exports = {
  makeListUserChatsService,
  makeGetChatRoomLastMessage,
  makeListChatMessages,
  makeIsChatRelatedToUser,
  makeCreateChatRoom,
  makeGetChatRoom,
  makeCreateMessage,
};
