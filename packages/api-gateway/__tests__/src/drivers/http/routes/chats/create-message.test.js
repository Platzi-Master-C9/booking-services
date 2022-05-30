// External dependencies
const { faker } = require('@faker-js/faker');
const { createMessage, isChatRelatedToUser } = require('@booking-services/messages');

// Internal dependencies
const { fastify } = require('../../../../../../src/drivers/http/server');

// Mocks
const mockMessageText = faker.lorem.sentence();
const mockUserId = faker.database.mongodbObjectId();
const mockChatId = faker.database.mongodbObjectId();

const mockChat = {
  _id: faker.database.mongodbObjectId(),
  chatId: mockChatId,
  text: mockMessageText,
  createdBy: mockUserId,
  createdAt: faker.datatype.datetime(),
  updatedAt: faker.datatype.datetime(),
};

describe('POST /chats/:chatId/messages', () => {
  const bearerToken = faker.datatype.uuid();
  const headers = {
    Authorization: `Bearer ${bearerToken}`,
  };

  describe('given a valid message payload', () => {
    const payload = {
      text: mockMessageText,
      createdBy: mockUserId,
    };

    describe('when creating a message and user is related to chat room', () => {
      let response;
      let responseJson;

      beforeAll(async () => {
        isChatRelatedToUser.mockReturnValue(true);
        createMessage.mockReturnValue(mockChat);

        response = await fastify.inject({
          method: 'POST',
          url: `/chats/${mockChatId}/messages`,
          headers,
          body: payload,
        });

        responseJson = response.json();
      });

      test('then must return a 201 status code', () => {
        expect(response.statusCode).toBe(201);
      });

      test('then result should be the new message', () => {
        const message = responseJson;
        expect(message._id).toBeDefined();
        expect(message.chatId).toBeDefined();
        expect(message.text).toBeDefined();
        expect(message.createdBy).toBeDefined();
        expect(message.createdAt).toBeDefined();
      });
    });

    describe('when creating a message and user is not related to chat room', () => {
      let response;
      let responseJson;

      beforeAll(async () => {
        isChatRelatedToUser.mockReturnValue(false);
        createMessage.mockReturnValue(mockChat);

        response = await fastify.inject({
          method: 'POST',
          url: `/chats/${mockChatId}/messages`,
          headers,
          body: payload,
        });
        responseJson = response.json();
      });

      test('then must return a 404 status code', () => {
        expect(response.statusCode).toBe(404);
      });

      test('then result should an error message', () => {
        const message = responseJson;
        expect(message.statusCode).toBeDefined();
        expect(message.message).toBeDefined();
        expect(message.error).toBeDefined();
      });
    });

    describe('when creating a message and use case return null as message', () => {
      let response;
      let responseJson;

      beforeAll(async () => {
        isChatRelatedToUser.mockReturnValue(true);
        createMessage.mockReturnValue(null);

        response = await fastify.inject({
          method: 'POST',
          url: `/chats/${mockChatId}/messages`,
          headers,
          body: payload,
        });

        responseJson = response.json();
      });

      test('then must return a 500 status code', () => {
        expect(response.statusCode).toBe(500);
      });

      test('then result should be an error', () => {
        expect(response.statusCode).toBe(500);
        expect(responseJson.error).toBe('Internal Server Error');
        expect(responseJson.statusCode).toBe(500);
        expect(typeof responseJson.message).toBe('string');
      });
    });
  });

  test.each(['createdBy', 'text'])('given undefined as %s, when creating a message, then should return a 400 status code', async (field) => {
    isChatRelatedToUser.mockReturnValue(true);

    const createdBy = field === 'createdBy' ? undefined : mockUserId;
    const text = field === 'text' ? undefined : mockMessageText;

    const response = await fastify.inject({
      method: 'POST',
      url: `/chats/${mockChatId}/messages`,
      headers,
      body: {
        text,
        createdBy,
      },
    });
    const responseJson = response.json();

    expect(response.statusCode).toBe(400);
    expect(responseJson.error).toBe('Bad Request');
    expect(responseJson.statusCode).toBe(400);
    expect(typeof responseJson.message).toBe('string');
  });
});
