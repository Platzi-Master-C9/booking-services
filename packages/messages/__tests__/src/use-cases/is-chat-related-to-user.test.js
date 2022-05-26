// External dependencies
const { Logger } = require('@booking-services/shared');
const { default: faker } = require('@faker-js/faker');

// Internal dependencies
const { makeIsChatRelatedToUser } = require('../../../src/use-cases');
const { makeMockModel } = require('../../setupTest');

// Mocks
const mockCustomerId = faker.datatype.uuid();
const mockHostId = faker.datatype.uuid();

const ChatData = [
  {
    _id: faker.datatype.uuid(),
    placeId: faker.datatype.uuid(),
    hostId: mockHostId,
    customerId: mockCustomerId,
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: null,
  },
];

const ChatModel = makeMockModel(ChatData);

describe('makeIsChatRelatedToUser', () => {
  describe('given a Chat room model', () => {
    describe('when creating the use case', () => {
      let useCase;

      beforeAll(() => {
        useCase = makeIsChatRelatedToUser(ChatModel);
      });

      test('then result should be a function', () => {
        expect(useCase).toBeInstanceOf(Function);
      });
    });
  });

  describe('given undefined as chat room model', () => {
    describe('when creating the use case', () => {
      test('then should return an error', () => {
        expect(() => makeIsChatRelatedToUser()).toThrowError();
      });
    });
  });
});

describe('use-case: isChatRelatedToUser', () => {
  const useCase = makeIsChatRelatedToUser(ChatModel);

  describe('given a valid user ID and Chat ID', () => {
    const chatId = ChatData[0]._id;
    const userId = mockCustomerId;

    describe('when the user is related to the chat room', () => {
      let output;

      beforeAll(async () => {
        ChatModel.exists.mockReturnValue(true);
        output = await useCase({ userId, chatId });
      });

      test('then should return true', () => {
        expect(output).toBe(true);
      });
    });

    describe('when the user is not related to the chat room', () => {
      let output;

      beforeAll(async () => {
        ChatModel.exists.mockReturnValue(false);
        output = await useCase({ userId: faker.datatype.uuid(), chatId });
      });

      test('then should return false', () => {
        expect(output).toBe(false);
      });
    });

    describe('when database connection fails', () => {
      let output;
      beforeEach(async () => {
        ChatModel.exists.mockImplementationOnce(() => {
          throw new Error('Database connection failed');
        });
        output = await useCase({ userId, chatId });
      });

      test('then should log an error', () => {
        expect(Logger.error).toHaveBeenCalled();
      });

      test('then result should be false', () => {
        expect(output).toBe(false);
      });
    });
  });

  describe('given an invalid user ID and a valid Chat Id ', () => {
    const chatId = ChatData[0]._id;
    const userId = undefined;

    describe('when executing the use case', () => {
      test('then should return an error', () => {
        expect(async () => {
          await useCase({ userId, chatId });
        }).rejects.toThrowError();
      });
    });
  });

  describe('given a valid user ID and an invalid Chat Id ', () => {
    const chatId = undefined;
    const userId = mockCustomerId;

    describe('when executing the use case', () => {
      expect(async () => {
        await useCase({ userId, chatId });
      }).rejects.toThrowError();
    });
  });
});
