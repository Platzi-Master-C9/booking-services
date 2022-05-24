const { faker } = require('@faker-js/faker'); // eslint-disable-line

// Populate DB with dumy data
const populate = () => {
  let places = [];
  for (let i = 0; i < 10000; i += 1) {
    const place = {
      location: {
        type: 'Point',
        coordinates: [
          parseFloat(faker.address.longitude()),
          parseFloat(faker.address.latitude()),
        ],
      },
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      street_address: faker.address.streetAddress(),
      price: faker.commerce.price(),
      place_db_id: faker.datatype.uuid(),
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
      deleted_at: null,
    };
    places = [...places, place];
  }
  return places;
};

module.exports = populate;
