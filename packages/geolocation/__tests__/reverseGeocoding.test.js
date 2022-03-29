const boom = require('@hapi/boom');
const { reverseGeocoding } = require('../src/index');

test('should return a place, given a longitude and latitude', async () => {
  const place = await reverseGeocoding(-73, 40);
  expect(place).toEqual(
    expect.objectContaining({
      _id: expect.any(String),
      country: expect.any(String),
      state: expect.any(String),
      city: expect.any(String),
      postcode: expect.any(String),
      streetAddress: expect.any(String),
    })
  );
});

test('should return a object of type boom with 404 if any array was found', async () => {
  await reverseGeocoding(-17, 20, 0).catch((error) =>
    expect(error).toEqual(
      expect.objectContaining(
        boom.notFound(
          '[geolocation:reverseGeocodingAddress]: No place found',
          []
        )
      )
    )
  );
});

test('should return an object of type boom with 400 if lon and lat are not supplied', async () => {
  await reverseGeocoding().catch((error) =>
    expect(error).toEqual(
      expect.objectContaining(
        boom.badRequest(
          `[geolocation:reverseGeocoding]: latitude and longitude are required`
        )
      )
    )
  );
});
