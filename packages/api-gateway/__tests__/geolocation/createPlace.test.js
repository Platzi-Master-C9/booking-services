const Fastify = require('fastify');
const Autoload = require('@fastify/autoload');
const pluginLoader = require('fastify-plugin');
const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const getApiGatewayDirectory = require('../../src/utils/getApiGateweyDirectory');

describe('Create a place then return id and status code 200', () => {
  // mock update place
  const createPlace = () => async () => '4d7w8w44f4s84s8d7f4s8d74';
  const GeolocationServices = {
    createPlace: createPlace(),
  };
  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and create function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given a place object, when a user create a place, then return the status code 200 and the Id', async () => {
    const placeCreated = await fastify.inject({
      method: 'POST',
      url: 'geolocation/place',
      body: {
        location: [parseInt(faker.address.longitude(), 10), parseInt(faker.address.latitude(), 10)],
        country: faker.address.country(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        street_address: faker.address.direction(),
        place_db_id: faker.datatype.uuid(),
        price: parseInt(faker.commerce.price(), 10),
      },
    });

    expect(placeCreated.statusCode).toEqual(200);
    expect(JSON.parse(placeCreated.body)).toEqual(
      expect.objectContaining({ id: expect.any(String) }),
    );
  });
});

describe('Create a place failed then return status code 500', () => {
  // mock update place
  const createPlace = () => async () => {
    throw boom.internal('cannot update the place');
  };
  const GeolocationServices = {
    createPlace: createPlace(),
  };
  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given a place object, when a user create a place and cannot update, then return the status code 500', async () => {
    const placeCreated = await fastify.inject({
      method: 'POST',
      url: 'geolocation/place',
      body: {
        location: [parseInt(faker.address.longitude(), 10), parseInt(faker.address.latitude(), 10)],
        country: faker.address.country(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        street_address: faker.address.direction(),
        place_db_id: faker.datatype.uuid(),
        price: parseInt(faker.commerce.price(), 10),
      },
    });

    expect(placeCreated.statusCode).toEqual(500);
    expect(JSON.parse(placeCreated.body)).toEqual(
      expect.objectContaining({
        error: 'Internal Server Error',
        message: expect.any(String),
      }),
    );
  });
});
