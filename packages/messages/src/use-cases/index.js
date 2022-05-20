// Internal dependencies
const makeListUserChatsService = require('./list-user-chats');
const makeGetChatRoomLastMessage = require('./get-last-message-of-chat-room');
const makeListChatMessages = require('./list-chat-messages');
const makeIsChatRelatedToUser = require('./is-chat-related-to-user');
const makeSaveMessage = require('./save-message');

module.exports = {
  makeListUserChatsService,
  makeGetChatRoomLastMessage,
  makeListChatMessages,
  makeIsChatRelatedToUser,
  makeSaveMessage,
};
