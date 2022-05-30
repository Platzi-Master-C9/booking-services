// External dependencies
const { faker } = require('@faker-js/faker');
const { Logger } = require('@booking-services/shared');

// Internal dependencies
const { makeCreateMessage } = require('../../../src/use-cases');
const { makeMockModel } = require('../../setupTest');

// Mocks
const mockUserId = faker.database.mongodbObjectId();
const mockChatId = faker.database.mongodbObjectId();

const mockMessage = {
  _id: faker.database.mongodbObjectId(),
  chatId: mockChatId,
  text: faker.lorem.sentence(),
  createdBy: mockUserId,
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
};

const MessagesModel = makeMockModel([mockMessage]);

describe('makeCreateMessage', () => {
  describe('given a Chat model', () => {
    describe('when creating the use case', () => {
      let useCase;

      beforeAll(() => {
        useCase = makeCreateMessage(MessagesModel);
      });

      test('then result should be a function', () => {
        expect(useCase).toBeInstanceOf(Function);
      });
    });
  });

  describe('given undefined as chat model', () => {
    describe('when creating the use case', () => {
      test('then should return an error', () => {
        expect(() => makeCreateMessage()).toThrowError();
      });
    });
  });
});

describe('use-case: create-chat-room', () => {
  const service = makeCreateMessage(MessagesModel);

  describe('given a valid message', () => {
    describe('when creating the message', () => {
      let output;

      beforeAll(async () => {
        output = await service({
          chatId: mockChatId,
          text: mockMessage.text,
          createdBy: mockUserId,
        });
      });

      test('then result should be a message object', () => {
        const message = output;
        expect(message).toBeDefined();
        expect(message._id).toBeDefined();
        expect(message.chatId).toBeDefined();
        expect(message.text).toBeDefined();
        expect(message.createdBy).toBeDefined();
        expect(message.createdAt).toBeDefined();
      });
    });

    describe('when creating the message and database connection fails', () => {
      beforeAll(async () => {
        MessagesModel.create.mockImplementationOnce(() => {
          throw new Error('Database connection error');
        });
      });

      test('then result should be null', async () => {
        const output = await service({
          chatId: mockChatId,
          text: mockMessage.text,
          createdBy: mockUserId,
        });
        expect(Logger.error).toHaveBeenCalled();
        expect(output).toBe(null);
      });
    });
  });

  test.each([
    'chatId',
    'text',
    'createdBy',
  ])('given an invalid value for %s, when running the use case, then should return an error', async (key) => {
    const chatId = key === 'chatId' ? mockChatId : '';
    const text = key === 'text' ? 'text' : '';
    const createdBy = key === 'createdBy' ? mockUserId : '';

    expect(() => service({
      chatId,
      text,
      createdBy,
    })).rejects.toThrow();
  });
});
