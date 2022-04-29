const { fastify } = require('../../src/drivers/http/server');

describe('Given a client that wants to get the Places data', () => {
  describe('When the server cannot connect to db', () => {
    jest.mock('@booking-services/places', () => ({
      getPlaces: jest.fn(() => new Error()),
    }));
    test('Then the back must return a 500 status code', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: 'places',
      });
      expect(response.statusCode).toBe(500);
    });
  });
});
