const boom = require('@hapi/boom');
const { getPlaces } = require('../src/index');

test('should return an array of places, given a longitude and latitude and maxDistance', async () => {
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
    ])
  );
});

test('should return a object of type boom with 404 if any array was found', () => {
  getPlaces(-70, 40, 0).catch((error) =>
    expect(error).toEqual(
      expect.objectContaining(
        boom.notFound('[geolocation:getPlaces]: No places found', [])
      )
    )
  );
});

test('should return an object of type boom with 400 if lon and lat are not supplied', () => {
  getPlaces().catch((error) =>
    expect(error).toEqual(
      expect.objectContaining(
        boom.badRequest(
          `[geolocation:getPlaces]: latitude and longitude are required`
        )
      )
    )
  );
});
