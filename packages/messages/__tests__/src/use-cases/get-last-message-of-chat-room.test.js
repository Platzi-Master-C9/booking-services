// External dependencies
const { faker } = require('@faker-js/faker');

// Internal dependencies
const { makeGetChatRoomLastMessage } = require('../../../src/use-cases');
const { makeMockModel, clearModelMocks } = require('../../setupTest');

// Mocks
const mockMessages = [
  {
    _id: faker.datatype.uuid(),
    chatId: faker.datatype.uuid(),
    text: faker.lorem.sentence(),
    createdAt: faker.datatype.datetime(),
    deletedAt: null,
    createdBy: faker.datatype.uuid(),
  },
];

const MessageModel = makeMockModel(mockMessages);

const service = makeGetChatRoomLastMessage(MessageModel);

describe('use-case: getChatRoomLastMessage', () => {
  describe('given a valid chat id', () => {
    describe('when requesting the last message of the chat room', () => {
      let output;

      beforeAll(async () => {
        output = await service({
          chatId: mockMessages[0].chatId,
        });
      });

      test('then result should be the last message of the chat room', () => {
        const message = output;

        expect(message).toBeDefined();
        expect(message._id).toBeDefined();
        expect(message.chatId).toBeDefined();
        expect(message.text).toBeDefined();
        expect(message.createdAt).toBeDefined();
        expect(message.deletedAt).toBe(null);
        expect(message.createdBy).toBeDefined();
      });
    });
  });

  describe('given an invalid chat id', () => {
    describe('when requesting the last message of the chat room', () => {
      beforeAll(async () => {
        clearModelMocks(MessageModel);
      });

      test('then result should be null if the chat id is a string', async () => {
        const output = await service({
          chatId: mockMessages[0].chatId,
        });
        const message = output;
        expect(message).toBe(null);
      });

      test('then should throw an error if the chat id is not a string', () => {
        expect(async () => {
          await service({ chatId: true });
        }).rejects.toThrow();
      });
    });
  });

  describe('given a non-valid model', () => {
    const invalidModel = undefined;

    describe('when creating the service and requesting the last message of a chat room ', () => {
      const service2 = makeGetChatRoomLastMessage(invalidModel);

      test('then it should return an error', async () => {
        expect(async () => {
          await service2({
            chatId: mockMessages[0].chatId,
          });
        }).rejects.toThrow();
      });
    });
  });
});
