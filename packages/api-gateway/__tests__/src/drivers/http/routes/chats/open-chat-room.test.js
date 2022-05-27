// External dependencies
const { faker } = require('@faker-js/faker');
const { createChatRoom, getChatRoom } = require('@booking-services/messages');

// Internal dependencies
const { fastify } = require('../../../../../../src/drivers/http/server');

// Mocks
const mockCustomerID = faker.database.mongodbObjectId();
const mockHostID = faker.database.mongodbObjectId();
const mockPlaceID = faker.database.mongodbObjectId();

const mockChat = {
  _id: faker.database.mongodbObjectId(),
  placeId: mockPlaceID,
  hostId: mockHostID,
  customerId: mockCustomerID,
  createdAt: faker.datatype.datetime(),
  updatedAt: faker.datatype.datetime(),
};

describe('POST /chats', () => {
  const bearerToken = faker.datatype.uuid();
  const headers = {
    Authorization: `Bearer ${bearerToken}`,
  };

  describe(`given ${mockCustomerID} as customerId, ${mockHostID} as hostId and ${mockPlaceID} as placeId`, () => {
    const payload = {
      customerId: mockCustomerID,
      hostId: mockHostID,
      placeId: mockPlaceID,
    };

    describe('when opening an existing chat room', () => {
      let response;
      let responseJson;

      beforeAll(async () => {
        getChatRoom.mockReturnValueOnce(mockChat);

        response = await fastify.inject({
          method: 'POST',
          url: '/chats',
          headers,
          body: payload,
        });
        responseJson = response.json();
      });

      test('then must return a 200 status code', () => {
        expect(response.statusCode).toBe(200);
      });

      test('then result should be the chat room', () => {
        const chat = responseJson;
        expect(chat._id).toBeDefined();
        expect(chat.placeId).toBeDefined();
        expect(chat.hostId).toBeDefined();
        expect(chat.customerId).toBeDefined();
        expect(chat.createdAt).toBeDefined();
        expect(chat.updatedAt).toBeDefined();
      });

      test('and should not create a new chat room', async () => {
        // We make the call again because the mock is not reset
        getChatRoom.mockReturnValueOnce(mockChat);

        await fastify.inject({
          method: 'POST',
          url: '/chats',
          headers,
          body: payload,
        });

        expect(createChatRoom).not.toHaveBeenCalled();
      });
    });

    describe('when opening a non-existing chat room', () => {
      let response;
      let responseJson;

      beforeAll(async () => {
        getChatRoom.mockReturnValueOnce(mockChat);

        response = await fastify.inject({
          method: 'POST',
          url: '/chats',
          headers,
          body: payload,
        });
        responseJson = response.json();
      });

      test('then getChatRoom must be called', async () => {
        // We make the call again because the mock is not reset
        await fastify.inject({
          method: 'POST',
          url: '/chats',
          headers,
          body: payload,
        });

        expect(getChatRoom).toHaveBeenCalled();
      });

      test('then must return a 201 status code', () => {
        expect(response.statusCode).toBe(200);
      });

      test('then should return the new chat room', () => {
        const item = responseJson;
        expect(item._id).toBeDefined();
        expect(item.placeId).toBeDefined();
        expect(item.hostId).toBeDefined();
        expect(item.customerId).toBeDefined();
        expect(item.createdAt).toBeDefined();
        expect(item.updatedAt).toBeDefined();
      });
    });
  });

  test.each([
    'customerId',
    'hostId',
    'placeId',
  ])('given undefined as %s, when opening a chat room, then should return a 400 status code', async (field) => {
    const payload = {
      customerId: field === 'customerId' ? undefined : mockCustomerID,
      hostId: field === 'hostId' ? undefined : mockHostID,
      placeId: field === 'placeId' ? undefined : mockPlaceID,
    };

    const response = await fastify.inject({
      method: 'POST',
      url: '/chats',
      headers,
      body: payload,
    });
    const responseJson = response.json();

    expect(response.statusCode).toBe(400);
    expect(responseJson.error).toBe('Bad Request');
    expect(responseJson.statusCode).toBe(400);
    expect(typeof responseJson.message).toBe('string');
  });
});
