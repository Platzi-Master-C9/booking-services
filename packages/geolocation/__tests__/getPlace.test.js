const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const { getPlace } = require('../src/index');
/* eslint no-underscore-dangle: ["error", {  "allow": ["_id"] }] */

describe('[GET] getPlace method to find in dababase', () => {
  test('Given an id from a place, when the user wants to get a place, then return the place in the geolocation database with the Id', async () => {
    const _id = '6257164a0c0f4e3a79cefe48';
    const getPlaceById = await getPlace(_id);
    expect(getPlaceById).toEqual(_id);
  });

  test('Given an id from a place, when the user wants to get a place and not found, then return a object of type boom with 404', async () => {
    const _id = faker.datatype.hexadecimal(10);
    getPlace(_id).catch((error) => expect(error).toEqual(
      expect.objectContaining(
        boom.notFound(
          `[geolocation:getPlace]: No place found with id: ${_id}`,
        ),
      ),
    ));
  });

  test('Given an id from a place, when a user wants to get a place and failed, then return a object of type boom with 500', async () => {
    const _id = faker.datatype.hexadecimal(10);
    getPlace().catch((error) => expect(error).toEqual(
      expect.objectContaining(
        boom.internal(
          `[geolocation:getPlace]: Cannot get the place with id: ${_id}`,
        ),
      ),
    ));
  });
});
