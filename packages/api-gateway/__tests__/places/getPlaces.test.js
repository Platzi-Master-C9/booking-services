const { fastify } = require('../../src/drivers/http/server');

describe('Given a client that wants to get the Places data', () => {
  describe('When it does the GET petition', () => {
    test('Then the back must read it from the db and return it', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: 'places',
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
