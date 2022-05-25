const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const { deletePlace } = require('../src/index');
/* eslint no-underscore-dangle: ["error", {  "allow": ["_id"] }] */

describe('[DELETE] deletePlace method to delete in dababase', () => {
  test('Given an id from a place, when the user wants to delete a place, then delete the place in the geolocation database with the Id and return the id', async () => {
    const _id = '6257164a0c0f4e3a79cefe48';
    const deletedPlace = await deletePlace(_id);
    expect(deletedPlace).toEqual(_id);
  });

  test('Given an id from a place, when the user wants to delete a place and not found, then return a object of type boom with 404', async () => {
    const _id = faker.datatype.hexadecimal(10);
    deletePlace(_id).catch((error) => expect(error).toEqual(
      expect.objectContaining(
        boom.notFound(
          `[geolocation:deletePlace]: No place found with id: ${_id}`,
        ),
      ),
    ));
  });

  test('Given an id from a place, when a user wants to delete and failed, then return a object of type boom with 500', async () => {
    const _id = faker.datatype.hexadecimal(10);
    deletePlace().catch((error) => expect(error).toEqual(
      expect.objectContaining(
        boom.internal(
          `[geolocation:deletePlace]: Cannot delete the place with id: ${_id}`,
        ),
      ),
    ));
  });
});
