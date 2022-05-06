// External dependecies
const { faker } = require('@faker-js/faker');

// Internal dependencies
const { makeListChatMessages } = require('../../../src/use-cases');
const { makeMockModel } = require('../../setupTest');

// Mocks
const mockChatId = faker.datatype.uuid();

const mockMessages = [
  {
    _id: faker.datatype.uuid(),
    chatId: mockChatId,
    text: faker.lorem.sentence(),
    createdAt: faker.datatype.datetime(),
    deletedAt: null,
    createdBy: faker.datatype.uuid(),
  },
];

const MessageModel = makeMockModel(mockMessages);

describe('use-case: listChatMessages', () => {
  describe('given an invalid message model', () => {
    describe('when injecting the message model', () => {
      test('then should return an error', () => {
        expect(() => makeListChatMessages(null)).toThrow();
      });
    });
  });

  describe('given a valid message model', () => {
    describe('when injecting the message model', () => {
      test('then should return a function', () => {
        const service = makeListChatMessages(MessageModel);
        expect(typeof service).toBe('function');
      });
    });
  });

  describe('given an invalid chat id and an invalid page', () => {
    let service;

    beforeAll(() => {
      service = makeListChatMessages(MessageModel);
    });

    describe('when requesting the list of messages with undefined as chat id and 1 as page', () => {
      test('then should return an error', () => {
        expect(() => service({ chatId: undefined, page: 1 })).rejects.toThrow();
      });
    });

    describe('when requesting the list of messages with 1 as chat id and undefined as page', () => {
      test('then should return an error', () => {
        expect(() => service({ chatId: 1, page: undefined })).rejects.toThrow();
      });
    });
  });

  describe('given a valid chat id and a valid page', () => {
    let service;

    beforeAll(() => {
      service = makeListChatMessages(MessageModel);
    });

    describe('when requesting the list of messages successfully', () => {
      let result;

      beforeAll(async () => {
        result = await service({
          chatId: mockChatId,
          page: 1,
        });
      });

      test('then result should be an object with the number of pages and the list of messages', () => {
        expect(result).toHaveProperty('pages');
        expect(result).toHaveProperty('messages');
      });

      test('then pages property should be an positive integer', () => {
        expect(Number.isInteger(result.pages)).toBe(true);
        expect(result.pages).toBeGreaterThanOrEqual(0);
      });

      test('then messages property should be an array', () => {
        expect(Array.isArray(result.messages)).toBe(true);
      });

      test('and message items should match message schema', () => {
        const message = result.messages[0];

        expect(message).toBeDefined();
        expect(message._id).toBeDefined();
        expect(message.chatId).toBeDefined();
        expect(message.text).toBeDefined();
        expect(message.createdAt).toBeDefined();
        expect(message.deletedAt).toBe(null);
        expect(message.createdBy).toBeDefined();
      });
    });

    describe('when requesting the list of messages with no database connection', () => {
      let result;

      beforeAll(async () => {
        MessageModel.find.mockImplementationOnce(() => {
          throw new Error('Database connection error');
        });

        result = await service({
          chatId: mockChatId,
          page: 1,
        });
      });

      test('then result should be an object with the number of pages and the list of messages', () => {
        expect(result).toHaveProperty('pages');
        expect(result).toHaveProperty('messages');
      });

      test('then pages property should be 0', () => {
        expect(result.pages).toBe(0);
      });

      test('and messages property should be an empty array', () => {
        expect(Array.isArray(result.messages)).toBe(true);
        expect(result.messages.length).toBe(0);
      });

      test('then result should be an empty array', () => {
      });
    });
  });
});
