// Internal dependencies
const ChatRoomFixture = require('../../fixtures/chatrooms.json');
const MessagesFixture = require('../../fixtures/chatmessages.json');

// Fake models
const FakeChatModel = {
  find: () => ChatRoomFixture,
  findOne: () => ChatRoomFixture[0],
  findById: () => ChatRoomFixture[0],
  countDocuments: () => ChatRoomFixture.length,
};

const FakeMessageModel = {
  find: () => MessagesFixture,
  findOne: () => MessagesFixture[0],
  findById: () => MessagesFixture[0],
  countDocuments: () => MessagesFixture.length,
};

module.exports = {
  FakeChatModel,
  FakeMessageModel,
};
