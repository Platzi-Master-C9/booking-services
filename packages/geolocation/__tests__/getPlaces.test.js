const boom = require('@hapi/boom');
const { getPlaces } = require('../src/index');

test('given a longitude, latitude and maxDistance, when a list of places in a radius is required, then return an array of places', async () => {
  const places = await getPlaces(-70, 40, 1000000);
  expect(places).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        location: expect.objectContaining({
          type: expect.stringContaining('Point'),
          coordinates: expect.arrayContaining([
            expect.any(Number),
            expect.any(Number),
          ]),
        }),
        country: expect.any(String),
        state: expect.any(String),
        city: expect.any(String),
        postcode: expect.any(String),
        streetAddress: expect.any(String),
      }),
    ]),
  );
});

test('given a longitude, latitude and maxDistance, when no place was found, then return a object of type boom with 404', () => {
  getPlaces(-70, 40, 0).catch((error) => expect(error).toEqual(
    expect.objectContaining(
      boom.notFound('[geolocation:getPlaces]: No places found', []),
    ),
  ));
});

test('given a longitude, latitude, when lon and lat is undifined or null, then return an object of type boom with 400', () => {
  getPlaces().catch((error) => expect(error).toEqual(
    expect.objectContaining(
      boom.badRequest(
        '[geolocation:getPlaces]: latitude and longitude are required',
      ),
    ),
  ));
});
