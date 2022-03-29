const { faker } = require("@faker-js/faker");

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

module.exports = { mockGetPlaces };
