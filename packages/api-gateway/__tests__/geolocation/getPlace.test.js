const Fastify = require('fastify');
const Autoload = require('fastify-autoload');
const pluginLoader = require('fastify-plugin');
const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const getApiGatewayDirectory = require('../../src/utils/getApiGatewayDirectory');

describe('Get a place then return a object and status code 200', () => {
  // mock update place
  const getPlace = () => async (id) => ({
    id,
    location: [parseInt(faker.address.longitude(), 10), parseInt(faker.address.latitude(), 10)],
    country: faker.address.country(),
    state: faker.address.state(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    street_address: faker.address.direction(),
    place_db_id: faker.datatype.uuid(),
  });
  const GeolocationServices = {
    getPlace: getPlace(),
  };
  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given an id, when a place is required, then return the status code 200 and a place object', async () => {
    const placeUpdated = await fastify.inject({
      method: 'GET',
      url: 'geolocation/place',
      query: { id: faker.datatype.uuid() },
    });

    expect(placeUpdated.statusCode).toEqual(200);
    expect(JSON.parse(placeUpdated.body)).toEqual(
      expect.objectContaining({
        data: expect.objectContaining({
          id: expect.any(String),
          location: expect.arrayContaining([expect.any(Number), expect.any(Number)]),
          country: expect.any(String),
          state: expect.any(String),
          city: expect.any(String),
          zipcode: expect.any(String),
          street_address: expect.any(String),
          place_db_id: expect.any(String),
        }),
      }),
    );
  });
});

describe('Gat a place failed then return status code 404', () => {
  // mock update place
  const getPlace = () => async () => {
    throw boom.notFound('any place was found with that Id');
  };
  const GeolocationServices = {
    getPlace: getPlace(),
  };
  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given an id, when is required a place with a specific Id an this was not found, then return the status code 404', async () => {
    const placeUpdated = await fastify.inject({
      method: 'GET',
      url: 'geolocation/place',
      query: { id: faker.datatype.uuid() },
    });
    expect(placeUpdated.statusCode).toEqual(404);
    expect(JSON.parse(placeUpdated.body)).toEqual(
      expect.objectContaining({
        error: 'Not Found',
        message: expect.any(String),
      }),
    );
  });
});

describe('Get a place failed then return status code 500', () => {
  // mock update place
  const getPlace = () => async (id) => {
    throw boom.internal(`cannot get the place with the ${id}`);
  };
  const GeolocationServices = {
    getPlace: getPlace(),
  };
  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given an id, when a place with a specific id is required and its in the database but cant get it, then return status code 500', async () => {
    const placeUpdated = await fastify.inject({
      method: 'GET',
      url: 'geolocation/place',
      query: { id: faker.datatype.uuid() },
    });
    expect(JSON.parse(placeUpdated.body)).toEqual(
      expect.objectContaining({
        statusCode: 500,
        error: 'Internal Server Error',
        message: expect.any(String),
      }),
    );
  });
});
