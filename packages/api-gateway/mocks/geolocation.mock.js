const { faker } = require('@faker-js/faker');
const Fastify = require('fastify');
const Autoload = require('@fastify/autoload');
const pluginLoader = require('fastify-plugin');
const getApiGatewayDirectory = require('../src/utils/getApiGatewayDirectory');

// eslint-disable-next-line no-unused-vars
function mockPlaces() {
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
function mockAddress() {
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
function mockDeletePlace(id) {
  const place = {
    id,
  };

  return place;
}

function mockBuildApp(GeolocationServices) {
  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  return fastify;
}

module.exports = {
  mockPlaces, mockAddress, mockDeletePlace, mockBuildApp,
};
