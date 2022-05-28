const { geocoding } = require('../src/index');

test('given an address, when is created a place, then return a object width the data of the place', async () => {
  const result = await geocoding(
    'mariano escobedo 31',
    'cuapiaxtla',
    'tlaxcala',
    '90560',
    'MX',
  );
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
        streetName: expect.any(String),
        zipcode: undefined,
        streetNumber: undefined,
      }),
    ]),
  );
});
