const Fastify = require('fastify');
const Autoload = require('fastify-autoload');
const pluginLoader = require('fastify-plugin');
const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const getApiGatewayDirectory = require('../../src/utils/getApiGatewayDirectory');
const geolocationData = require('../../mocks/geolocationData.mock');

describe('[GET] geolocation/address endpoint then return address and status code 200', () => {
  // mock getAddress method
  // eslint-disable-next-line no-unused-vars
  const getAddress = () => async (lat, lon) => geolocationData.mockAddress();
  const GeolocationServices = {
    getAddress: getAddress(),
  };

  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  test('Given latitude, longitude when a user select a mark in the map, then return status code 200 and an address', async () => {
    const address = await fastify.inject({
      method: 'GET',
      url: 'geolocation/address',
      query: {
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
      },
    });

    expect(address.statusCode).toEqual(200);
    expect(JSON.parse(address.body)).toEqual(
      expect.objectContaining({
        address: expect.objectContaining({
          country: expect.any(String),
          city: expect.any(String),
          zipCode: expect.any(String),
          streetAddress: expect.any(String),
        }),
      }),
    );
  }, 10000);
});

describe('[GET] geolocation/address endpoint then return status code 400', () => {
  // mock getAddress method
  const getAddress = () => async () => {};
  const GeolocationServices = {
    getAddress: getAddress(),
  };

  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  test('Given wrong or null latitude, longitude when a user select a mark in a map, then return status code 400 ', async () => {
    const places = await fastify.inject({
      method: 'GET',
      url: 'geolocation/address',
    });

    expect(places.statusCode).toEqual(400);
  });
});

describe('[GET] geolocation/address endpoint then return status code 404', () => {
  // mock getAddress method
  const getAddress = () => async () => {
    throw boom.notFound('any address were found');
  };
  const GeolocationServices = {
    getAddress: getAddress(),
  };

  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given latitude, longitude when a user select a mark in a map, then return status code 404 for any address, not found', async () => {
    const address = await fastify.inject({
      method: 'GET',
      url: 'geolocation/address',
      query: {
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
      },
    });
    expect(JSON.parse(address.body)).toEqual(
      expect.objectContaining({
        statusCode: 404,
        error: 'Not Found',
        message: expect.any(String),
      }),
    );
  });
});

describe('[GET] geolocation/address endpoint then return status code 500 for server failure', () => {
  // mock getAddress method
  const getAddress = () => async () => {
    throw boom.internal('Something went wrong with server');
  };
  const GeolocationServices = {
    getAddress: getAddress(),
  };

  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given latitude, longitude and radius when a user select a mark in a map, then return status code 500 for internal server error', async () => {
    const address = await fastify.inject({
      method: 'GET',
      url: 'geolocation/address',
      query: {
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
      },
    });
    expect(JSON.parse(address.body)).toEqual(
      expect.objectContaining({
        statusCode: 500,
        error: 'Internal Server Error',
        message: expect.any(String),
      }),
    );
  });
});
