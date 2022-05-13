const Fastify = require('fastify');
const Autoload = require('fastify-autoload');
const pluginLoader = require('fastify-plugin');
const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const getApiGatewayDirectory = require('../../src/utils/getApiGatewayDirectory');

describe('Update a place then return id and status code 200', () => {
  // mock update place
  const updatePlace = () => async (id) => id;
  const GeolocationServices = {
    updatePlace: updatePlace(),
  };
  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given a id and address, when a user update a place, then return the status code 200', async () => {
    const placeUpdated = await fastify.inject({
      method: 'PATCH',
      url: 'geolocation/place',
      query: { id: faker.datatype.uuid(), address: faker.address.direction() },
    });

    expect(placeUpdated.statusCode).toEqual(200);
    expect(JSON.parse(placeUpdated.body)).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      }),
    );
  });
});

describe('Update a place failed then return status code 404', () => {
  // mock update place
  const updatePlace = () => async () => {
    throw boom.notFound('any place was found with that Id');
  };
  const GeolocationServices = {
    updatePlace: updatePlace(),
  };
  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given a id and address, when is required a update with an Id an this was not found, then return the status code 404', async () => {
    const placeUpdated = await fastify.inject({
      method: 'PATCH',
      url: 'geolocation/place',
      query: { id: faker.datatype.uuid(), address: faker.address.direction() },
    });
    expect(JSON.parse(placeUpdated.body)).toEqual(
      expect.objectContaining({
        statusCode: 404,
        error: 'Not Found',
        message: expect.any(String),
      }),
    );
  });
});

describe('Update a place failed then return status code 500', () => {
  // mock update place
  const updatePlace = () => async (id) => {
    throw boom.internal(`something cannot update the place with the ${id}`);
  };
  const GeolocationServices = {
    updatePlace: updatePlace(),
  };
  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given a id and address, when is required a update and the DB cannot update, then return the status code 500', async () => {
    const placeUpdated = await fastify.inject({
      method: 'PATCH',
      url: 'geolocation/place',
      query: { id: faker.datatype.uuid(), address: faker.address.direction() },
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
