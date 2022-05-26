// External dependencies
const { faker } = require('@faker-js/faker');

// Internal dependencies
const { makeListUserChatsService } = require('../../../src/use-cases');
const { makeMockModel } = require('../../setupTest');

// Mocks
const MockCustomerUser = {
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
};

const MockHostUser = {
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
};

const Chats = [
  {
    _id: faker.datatype.uuid(),
    placeId: faker.datatype.uuid(),
    hostId: MockHostUser._id,
    customerId: MockCustomerUser._id,
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: null,
  },
];

const ChatModel = makeMockModel(Chats);

const service = makeListUserChatsService(ChatModel);

describe('use-case: listChatUsers', () => {
  describe('given an authenticated user', () => {
    describe('when requesting the list of chat rooms with 1 as page', () => {
      let output;

      beforeAll(async () => {
        output = await service({
          user: MockCustomerUser,
          page: 1,
        });
      });

      test('then "chats" should be an array with the information of each chat room', () => {
        const { chats } = output;

        expect(Array.isArray(chats)).toBe(true);
        expect(chats.length).toBe(1);

        const chatRoom = chats[0];

        expect(chatRoom._id).toBeDefined();
        expect(chatRoom.placeId).toBeDefined();
        expect(chatRoom.hostId).toBeDefined();
        expect(chatRoom.customerId).toBeDefined();
        expect(chatRoom.createdAt).toBeDefined();
        expect(chatRoom.updatedAt).toBeDefined();
      });

      test('and "pages" should be the number of pages', () => {
        const { pages } = output;

        expect(Number.isInteger(pages)).toBe(true);
        expect(pages).toBe(1);
      });
    });

    describe('when requesting the list of chat rooms with non-integer value as page', () => {
      test('then result should be an error', async () => {
        await expect(service({
          user: MockCustomerUser,
          page: 'a',
        })).rejects.toThrow();
      });
    });
  });

  describe('given an unauthenticated or non-valid user', () => {
    describe('when requesting the list of chat rooms', () => {
      test('then result should be an error', async () => {
        await expect(service({
          user: {},
        })).rejects.toThrow();
      });
    });
  });
});
