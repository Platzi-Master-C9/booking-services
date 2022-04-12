const { faker } = require('@faker-js/faker');

// eslint-disable-next-line no-unused-vars
function mockGetPlaces(lat, lon) {
  const places = [
    {
      placeId: faker.datatype.uuid(),
      placeName: faker.address.secondaryAddress(),
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    },
    {
      placeId: faker.datatype.uuid(),
      placeName: faker.address.secondaryAddress(),
      lat: faker.address.latitude(),
      lon: faker.address.longitude(),
    },
    {
      placeId: faker.datatype.uuid(),
      placeName: faker.address.secondaryAddress(),
      lat: faker.address.latitude(),
      lon: faker.address.longitude(),
    },
  ];
  return places;
}

// eslint-disable-next-line no-unused-vars
function mockGetAddress(_lat, _lon) {
  const address = {
    address: {
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode(),
      streetAddress: faker.address.streetAddress(),
    },
  };

  return address;
}

// eslint-disable-next-line no-unused-vars
function mockDeleteGeolocationPlace(placeId) {
  const place = {
    id: faker.datatype.uuid(),
  };

  return place;
}

module.exports = { mockGetPlaces, mockGetAddress, mockDeleteGeolocationPlace };
