// External dependencies
const { faker } = require('@faker-js/faker');
const { listUserChats, getChatRoomLastMessage } = require('@booking-services/messages');

// Internal dependencies
const { fastify } = require('../../../../../../src/drivers/http/server');

// Mocks
const customerID = faker.datatype.uuid();
const hostID = faker.datatype.uuid();

const mockUserChats = {
  pages: 1,
  chats: [
    {
      _id: faker.datatype.uuid(),
      placeId: faker.datatype.uuid(),
      hostId: hostID,
      customerId: customerID,
      createdAt: faker.datatype.datetime(),
      updatedAt: faker.datatype.datetime(),
    },
  ],
};

const mockLastMessage = {
  _id: faker.datatype.uuid(),
  chatId: mockUserChats.chats[0]._id,
  text: faker.lorem.sentence(),
  createdAt: faker.datatype.datetime(),
  createdBy: customerID,
};

describe('GET /chats', () => {
  describe('given an authenticated user', () => {
    const bearerToken = faker.datatype.uuid();
    const headers = {
      Authorization: `Bearer ${bearerToken}`,
    };

    describe('when requesting page 1', () => {
      let response;
      let responseJson;

      beforeAll(async () => {
        listUserChats.mockReturnValue(mockUserChats);
        getChatRoomLastMessage.mockReturnValue(mockLastMessage);

        response = await fastify.inject({
          method: 'GET',
          url: '/chats',
          headers,
        });
        responseJson = response.json();
      });

      test('then must return a 200 status code', () => {
        expect(response.statusCode).toBe(200);
      });

      test('then must return the paginated result', () => {
        expect(responseJson).toHaveProperty('page');
        expect(typeof responseJson.page).toBe('number');
        expect(responseJson).toHaveProperty('pages');
        expect(typeof responseJson.pages).toBe('number');
        expect(responseJson).toHaveProperty('rows');
        expect(Array.isArray(responseJson.rows)).toBe(true);
      });

      test('response should have at least one element', () => {
        expect(responseJson.rows.length).toBeGreaterThan(0);
      });

      test('and the element should match schema', () => {
        const item = responseJson.rows[0];
        expect(item._id).toBeDefined();
        expect(item.placeId).toBeDefined();
        expect(item.hostId).toBeDefined();
        expect(item.customerId).toBeDefined();
        expect(item.lastMessage).toBeDefined();
        expect(item.createdAt).toBeDefined();
        expect(item.updatedAt).toBeDefined();
      });
    });

    describe('when requesting with a non-integer value as page', () => {
      /** @type {import('fastify').FastifyReply} */
      let response;

      beforeAll(async () => {
        response = await fastify.inject({
          method: 'GET',
          url: '/chats?page=a',
          headers,
        });
      });

      test('then status should be 400', () => {
        expect(response.statusCode).toBe(400);
      });
    });
  });
});
