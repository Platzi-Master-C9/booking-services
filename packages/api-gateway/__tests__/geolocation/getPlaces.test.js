const Fastify = require('fastify');
const Autoload = require('fastify-autoload');
const pluginLoader = require('fastify-plugin');
const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const getApiGatewayDirectory = require('../../src/utils/getApiGatewayDirectory');
const geolocationData = require('../../mocks/geolocationData.mock');

describe('[GET] geolocation/places endpoint then return places and status code 200', () => {
  // mock getPlaces method
  // eslint-disable-next-line no-unused-vars
  const getPlaces = () => async (lat, lon, radius) => geolocationData.mockPlaces();
  const GeolocationServices = {
    getPlaces: getPlaces(),
  };

  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  test('Given latitude, longitude and radius when a user select a mark in a map, then return status code 200 and an array with near places details from database', async () => {
    const places = await fastify.inject({
      method: 'GET',
      url: 'geolocation/places',
      query: {
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
        radius: 1000,
      },
    });

    expect(places.statusCode).toEqual(200);
    expect(JSON.parse(places.body)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          placeId: expect.any(String),
          placeName: expect.any(String),
          lat: expect.any(Number),
          lon: expect.any(Number),
        }),
      ]),
    );
  }, 10000);
});

describe('[GET] geolocation/places endpoint then return status code 400', () => {
  // mock getPlaces method
  const getPlaces = () => async () => {};
  const GeolocationServices = {
    getPlaces: getPlaces(),
  };

  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  test('Given wrong or null latitude, longitude or radius when a user select a mark in a map, then return status code 400 ', async () => {
    const places = await fastify.inject({
      method: 'GET',
      url: 'geolocation/places',
    });

    expect(places.statusCode).toEqual(400);
  });
});

describe('[GET] geolocation/places endpoint then return status code 404', () => {
  // mock getPlaces method
  const getPlaces = () => async () => {
    throw boom.notFound('any places were found');
  };
  const GeolocationServices = {
    getPlaces: getPlaces(),
  };

  async function services(fastify) {
    await fastify.decorate('geolocationServices', GeolocationServices);
  }

  // load fastify and update function
  const fastify = Fastify({ logger: true });
  fastify.register(Autoload, { dir: getApiGatewayDirectory() });
  fastify.register(pluginLoader(services));

  // run the test
  test('Given latitude, longitude and radius when a user select a mark in a map, then return status code 404 for any places, not found', async () => {
    const places = await fastify.inject({
      method: 'GET',
      url: 'geolocation/places',
      query: {
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
        radius: 1000,
      },
    });
    expect(JSON.parse(places.body)).toEqual(
      expect.objectContaining({
        statusCode: 404,
        error: 'Not Found',
        message: expect.any(String),
      }),
    );
  });
});

describe('[GET] geolocation/places endpoint then return status code 500 for server failure', () => {
  // mock getPlaces method
  const getPlaces = () => async () => {
    throw boom.internal('Something went wrong with server');
  };
  const GeolocationServices = {
    getPlaces: getPlaces(),
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
    const places = await fastify.inject({
      method: 'GET',
      url: 'geolocation/places',
      query: {
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
        radius: 1000,
      },
    });
    expect(JSON.parse(places.body)).toEqual(
      expect.objectContaining({
        statusCode: 500,
        error: 'Internal Server Error',
        message: expect.any(String),
      }),
    );
  });
});
