// Internal dependencies
const {
  makeListUserChatsService,
  makeGetChatRoomLastMessage,
  makeListChatMessages,
  makeIsChatRelatedToUser,
} = require('./use-cases');
const { ChatModel, MessageModel } = require('./domains/index');

module.exports = {
  listUserChats: makeListUserChatsService(ChatModel),
  getChatRoomLastMessage: makeGetChatRoomLastMessage(MessageModel),
  listChatMessages: makeListChatMessages(MessageModel),
  isChatRelatedToUser: makeIsChatRelatedToUser(ChatModel),
};
