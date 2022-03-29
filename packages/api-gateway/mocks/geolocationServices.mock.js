const { faker } = require("@faker-js/faker");

function mockGetAddress(lat, lon) {
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

module.exports = { mockGetAddress };
