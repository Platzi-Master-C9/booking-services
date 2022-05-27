// External dependencies
const { faker } = require('@faker-js/faker');
const { Logger } = require('@booking-services/shared');

// Internal dependencies
const { makeGetChatRoom } = require('../../../src/use-cases');
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

describe('makeGetChatRoom', () => {
  describe('given a Chat model', () => {
    describe('when creating the use case', () => {
      let useCase;

      beforeAll(() => {
        useCase = makeGetChatRoom(ChatModel);
      });

      test('then result should be a function', () => {
        expect(useCase).toBeInstanceOf(Function);
      });
    });
  });

  describe('given undefined as chat model', () => {
    describe('when creating the use case', () => {
      test('then should return an error', () => {
        expect(() => makeGetChatRoom()).toThrowError();
      });
    });
  });
});

describe('use-case: makeGetChatRoom', () => {
  const service = makeGetChatRoom(ChatModel);

  describe(`given ${mockPlaceID} as placeId, ${mockHostID} as hostId and ${mockCustomerID} as customerId`, () => {
    describe('when the chat exists', () => {
      let output;

      beforeAll(async () => {
        output = await service({
          placeId: mockPlaceID,
          hostId: mockHostID,
          customerId: mockCustomerID,
        });
      });

      test('then result should be the chat room', () => {
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

    describe('when the chat does not exists', () => {
      beforeAll(async () => {
        ChatModel.findOne.mockReturnValue(null);
      });

      afterAll(() => {
        ChatModel.findOne.mockReturnValue(Chats[0]);
      });

      test('then result should be null', async () => {
        const output = await service({
          placeId: mockPlaceID,
          hostId: mockHostID,
          customerId: mockCustomerID,
        });
        expect(output).toBe(null);
      });
    });

    describe('when database connection fails', () => {
      beforeAll(async () => {
        ChatModel.findOne.mockImplementation(() => {
          throw new Error('Database connection error');
        });
      });

      afterAll(() => {
        ChatModel.findOne.mockImplementation(() => Chats[0]);
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

  it.each([
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
});
