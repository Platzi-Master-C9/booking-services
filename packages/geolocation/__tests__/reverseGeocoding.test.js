const { reverseGeocoding } = require('../src/index');

test('given a lon and lat, when required a reversegeocoding, then return a object width the data of the place', async () => {
  const result = await reverseGeocoding(-78.43, 38.66);
  expect(result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        city: expect.any(String),
        country: expect.any(String),
        countryCode: expect.any(String),
        formattedAddress: expect.any(String),
        latitude: expect.any(Number),
        longitude: expect.any(Number),
        neighbourhood: expect.any(String),
        provider: expect.any(String),
        state: expect.any(String),
        streetName: undefined,
        streetNumber: undefined,
        zipcode: expect.any(String),
      }),
    ]),
  );
});
