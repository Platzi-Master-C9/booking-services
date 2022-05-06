const { fastify } = require('../src/drivers/http/server');

describe('geolocation/places endpoint', () => {
  const api = fastify;

  test('Given latitude, longitude and radius when a user select a mark in a map, then return status code 200 and an array with near places details from database', async () => {
    const places = await api.inject({
      method: 'GET',
      url: 'geolocation/places',
      query: { lat: 45.16546, lon: 46.14786, radius: 1000 },
    });

    expect(places.statusCode).toEqual(200);
    expect(JSON.parse(places.body)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          placeId: expect.any(String),
          placeName: expect.any(String),
          lat: expect.any(Number),
          lon: expect.any(Number),
        }),
      ]),
    );
  });

  test('Given wrong or null latitude, longitude or radius when a user select a mark in a map, then return status code 400 ', async () => {
    const places = await api.inject({
      method: 'GET',
      url: 'geolocation/places',
    });

    expect(places.statusCode).toEqual(400);
  });
});

describe('geolocation/address endpoint', () => {
  const api = fastify;

  test('Given latitude and longitude when a user select a mark in a map, then return status code 200 and an object with the address', async () => {
    const address = await api.inject({
      method: 'GET',
      url: 'geolocation/address',
      query: { lat: 45.16546, lon: 46.14786 },
    });

    expect(address.statusCode).toEqual(200);
    expect(JSON.parse(address.body)).toEqual(
      expect.objectContaining({
        address: expect.objectContaining({
          country: expect.any(String),
          city: expect.any(String),
          zipCode: expect.any(String),
          streetAddress: expect.any(String),
        }),
      }),
    );
  });

  test('Given wrong or null latitude and longitude when a user select a mark in a map, then return status code 400 ', async () => {
    const address = await api.inject({
      method: 'GET',
      url: 'geolocation/address',
    });

    expect(address.statusCode).toEqual(400);
  });
});
