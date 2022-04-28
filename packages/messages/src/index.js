// Internal dependencies
const welcome = require('./utils/welcomPackage');
const {
  makeListUserChatsService,
  makeGetChatRoomLastMessage,
  makeListChatMessages,
} = require('./use-cases');
const { FakeChatModel, FakeMessageModel } = require('./utils/fixtures');

module.exports = {
  messagesWelcome: welcome,
  listUserChats: makeListUserChatsService(FakeChatModel),
  getChatRoomLastMessage: makeGetChatRoomLastMessage(FakeMessageModel),
  listChatMessages: makeListChatMessages(FakeMessageModel),
};
