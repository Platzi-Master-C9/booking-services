const { fastify } = require('../../src/drivers/http/server');

const newPlaceInfo = {
  place_name: 'Mi nueva casa',
  price_per_night_usd: 15,
  host_id: 1,
  type: 'casa',
};

describe('Given a client that wants to save a new place', () => {
  // the successful
  describe('When it does the post petition with the required data', () => {
    test('Then the server must send a 201 status code', async () => {
      const response = await fastify.inject({
        method: 'POST',
        url: '/places',
        body: newPlaceInfo,
      });

      expect(response.statusCode).toBe(201);
    });
  });

  // the failed
  describe('When it does the petition without all the required data', () => {
    test('Then the server must send a 400 status code', async () => {
      const response = await fastify.inject({
        method: 'POST',
        url: '/places',
        body: {
          place_name: newPlaceInfo.place_name,
        },
      });
      expect(response.statusCode).toBe(400);
    });
  });
});
