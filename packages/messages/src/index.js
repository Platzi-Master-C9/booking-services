// Internal dependencies
const {
  makeListUserChatsService,
  makeGetChatRoomLastMessage,
  makeListChatMessages,
  makeIsChatRelatedToUser,
  makeCreateChatRoom,
  makeGetChatRoom,
  makeCreateMessage,
} = require('./use-cases');
const { ChatModel, MessageModel } = require('./domains/index');

module.exports = {
  listUserChats: makeListUserChatsService(ChatModel),
  getChatRoomLastMessage: makeGetChatRoomLastMessage(MessageModel),
  listChatMessages: makeListChatMessages(MessageModel),
  isChatRelatedToUser: makeIsChatRelatedToUser(ChatModel),
  createChatRoom: makeCreateChatRoom(ChatModel),
  getChatRoom: makeGetChatRoom(ChatModel),
  createMessage: makeCreateMessage(MessageModel),
};
