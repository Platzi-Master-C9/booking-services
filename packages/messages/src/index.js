// Internal dependencies
const welcome = require('./utils/welcomPackage');
const {
  makeListUserChatsService,
  makeGetChatRoomLastMessage,
  makeListChatMessages,
  makeIsChatRelatedToUser,
} = require('./use-cases');
const { ChatModel, MessageModel } = require('./domains/index');

module.exports = {
  messagesWelcome: welcome,
  listUserChats: makeListUserChatsService(ChatModel),
  getChatRoomLastMessage: makeGetChatRoomLastMessage(MessageModel),
  listChatMessages: makeListChatMessages(MessageModel),
  isChatRelatedToUser: makeIsChatRelatedToUser(ChatModel),
};
