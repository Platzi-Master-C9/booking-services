const { fastify } = require('../../src/drivers/http/server');

const newPlaceInfo = {
  place_name: 'Mi nueva casa',
  price_per_night_usd: 15,
  host_id: 1,
  type: 'casa',
};

// At least in my pc it lasts almost 15s
jest.setTimeout(15000);

describe('Given a client that wants to save a new place', () => {
  // the succesful
  describe('When it does the post petition with the required data', () => {
    test('Then the server must send a 200 status code', async () => {
      const response = await fastify.inject({
        method: 'POST',
        url: 'places/create',
        body: newPlaceInfo,
      });
      expect(response.statusCode).toBe(200);
    });
  });

  // the failed
  describe('When it does the petition without all the required data', () => {
    test('Then the server must send a 400 status code', async () => {
      const response = await fastify.inject({
        method: 'POST',
        url: 'places/create',
        body: {
          place_name: newPlaceInfo.place_name,
        },
      });
      expect(response.statusCode).toBe(400);
    });
  });
});
