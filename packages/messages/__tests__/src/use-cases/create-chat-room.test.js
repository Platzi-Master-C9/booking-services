// External dependencies
const { faker } = require('@faker-js/faker');
const { Logger } = require('@booking-services/shared');

// Internal dependencies
const { makeCreateChatRoom } = require('../../../src/use-cases');
const { makeMockModel } = require('../../setupTest');

// Mocks
const mockPlaceID = faker.database.mongodbObjectId();
const mockHostID = faker.database.mongodbObjectId();
const mockCustomerID = faker.database.mongodbObjectId();

const Chats = [
  {
    _id: faker.database.mongodbObjectId(),
    placeId: mockPlaceID,
    hostId: mockHostID,
    customerId: mockCustomerID,
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: null,
  },
];

const ChatModel = makeMockModel(Chats);

describe('makeCreateChatRoom', () => {
  describe('given a Chat model', () => {
    describe('when creating the use case', () => {
      let useCase;

      beforeAll(() => {
        useCase = makeCreateChatRoom(ChatModel);
      });

      test('then result should be a function', () => {
        expect(useCase).toBeInstanceOf(Function);
      });
    });
  });

  describe('given undefined as chat model', () => {
    describe('when creating the use case', () => {
      test('then should return an error', () => {
        expect(() => makeCreateChatRoom()).toThrowError();
      });
    });
  });
});

describe('use-case: create-chat-room', () => {
  const service = makeCreateChatRoom(ChatModel);

  describe(`given ${mockPlaceID} as placeId, ${mockHostID} as hostId and ${mockCustomerID} as customerId`, () => {
    describe('when executing the use case', () => {
      let output;

      beforeAll(async () => {
        output = await service({
          placeId: mockPlaceID,
          hostId: mockHostID,
          customerId: mockCustomerID,
        });
      });

      test('then result should be a chat room', () => {
        const chat = output;

        expect(chat).toBeDefined();
        expect(chat._id).toBeDefined();
        expect(chat.customerId).toBeDefined();
        expect(chat.placeId).toBeDefined();
        expect(chat.hostId).toBeDefined();
        expect(chat.createdAt).toBeDefined();
        expect(chat.deletedAt).toBe(null);
      });
    });

    describe('when database connection fails', () => {
      beforeAll(async () => {
        ChatModel.create.mockImplementationOnce(() => {
          throw new Error('Database connection error');
        });
      });

      test('then result should be null', async () => {
        const output = await service({
          placeId: mockPlaceID,
          hostId: mockHostID,
          customerId: mockCustomerID,
        });
        expect(Logger.error).toHaveBeenCalled();
        expect(output).toBe(null);
      });
    });
  });

  test.each([
    'placeId',
    'hostId',
    'customerId',
  ])('given an invalid value for %s, when running the use case, then should return an error', async (key) => {
    const payloadMap = {
      placeId: { placeId: '', hostId: mockHostID, customerId: mockCustomerID },
      hostId: { placeId: mockHostID, hostId: '', customerId: mockCustomerID },
      customerId: { placeId: mockHostID, hostId: mockHostID, customerId: '' },
    };

    expect(() => service(payloadMap[key])).rejects.toThrow();
  });

  test('given the same value for hostId and customerId, when running the use case, then should return an error', async () => {
    expect(() => service({
      placeId: mockPlaceID,
      hostId: mockHostID,
      customerId: mockHostID,
    })).rejects.toThrow();
  });
});
