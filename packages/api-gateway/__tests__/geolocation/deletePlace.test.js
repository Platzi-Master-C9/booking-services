const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const { mockBuildApp } = require('../../mocks/geolocation.mock');

describe('[DELETE] geolocation/place endpoint then return id and status code 200', () => {
  test('Given an id when a user wants to delete a place, then return status code 200 and the id of the deleted place in geolocation database', async () => {
    const deletePlace = () => async (id) => id;
    const GeolocationServices = {
      deletePlace: deletePlace(),
    };
    const app = mockBuildApp(GeolocationServices);

    const placeDeleted = await app.inject({
      method: 'DELETE',
      url: 'geolocation/place',
      query: {
        placeId: faker.datatype.uuid(),
      },
    });

    expect(placeDeleted.statusCode).toEqual(200);
    expect(JSON.parse(placeDeleted.body)).toEqual(
      expect.objectContaining({
        message: expect.any(String),
        placeId: expect.any(String),
      }),
    );
  }, 10000);
});

describe('[DELETE] geolocation/place endpoint then return status code 400', () => {
  // mock deletePlace method
  const deletePlace = () => async () => {};
  const GeolocationServices = {
    deletePlace: deletePlace(),
  };
  const app = mockBuildApp(GeolocationServices);

  test('Given null id when a user select a place to delete, then return status code 400 ', async () => {
    const place = await app.inject({
      method: 'DELETE',
      url: 'geolocation/place',
    });

    expect(place.statusCode).toEqual(400);
  });
});

describe('[DELETE] geolocation/place endpoint then return status code 404', () => {
  // mock deletePlace method
  const deletePlace = () => async () => {
    throw boom.notFound('any place were found');
  };
  const GeolocationServices = {
    deletePlace: deletePlace(),
  };
  const app = mockBuildApp(GeolocationServices);

  // run the test
  test('Given a wrong id when a user select a place to delete, then return status code 404 for any place, not found', async () => {
    const place = await app.inject({
      method: 'DELETE',
      url: 'geolocation/place',
      query: {
        placeId: faker.datatype.uuid(),
      },
    });
    expect(JSON.parse(place.body)).toEqual(
      expect.objectContaining({
        statusCode: 404,
        error: 'Not Found',
        message: expect.any(String),
      }),
    );
  });
});

describe('[GET] geolocation/place endpoint then return status code 500 for server failure', () => {
  // mock deletePlace method
  const deletePlace = () => async () => {
    throw boom.internal('Something went wrong with server');
  };
  const GeolocationServices = {
    deletePlace: deletePlace(),
  };
  const app = mockBuildApp(GeolocationServices);

  // run the test
  test('Given an id when a user select a place to delete, then return status code 500 for internal server error', async () => {
    const place = await app.inject({
      method: 'DELETE',
      url: 'geolocation/place',
      query: {
        placeId: faker.datatype.uuid(),
      },
    });
    expect(JSON.parse(place.body)).toEqual(
      expect.objectContaining({
        statusCode: 500,
        error: 'Internal Server Error',
        message: expect.any(String),
      }),
    );
  });
});
