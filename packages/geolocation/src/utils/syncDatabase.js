const { faker } = require('@faker-js/faker');

// Schema for collection places
const placesSchema = {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['location', 'country', 'city', 'postcode', 'streetAddress'],
      properties: {
        location: {
          bsonType: 'object',
          required: ['type', 'coordinates'],
          properties: {
            type: { bsonType: 'string', enum: ['Point'] },
            coordinates: {
              bsonType: ['array'],
              minItems: 2,
              maxItems: 2,
              items: [
                {
                  bsonType: 'double',
                  minimum: -180,
                  maximum: 180,
                },
                {
                  bsonType: 'double',
                  minimum: -180,
                  maximum: 180,
                },
              ],
            },
          },
        },
        country: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        city: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        postcode: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        streetAddress: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
      },
    },
  },
};

// Populate DB with dumy data
const populate = () => {
  let places = [];
  for (let i = 0; i < 10000; i++) {
    let place = {
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
      postcode: faker.address.zipCode(),
      streetAddress: faker.address.streetAddress(),
    };
    places.push(place);
  }
  return places;
};

module.exports = { placesSchema, populate };
