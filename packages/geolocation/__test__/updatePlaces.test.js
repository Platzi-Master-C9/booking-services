const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const { updatePlace } = require('../src/index');

test('given an id and address, when need update a place, then update the place with the Id and return the id', async () => {
  const id = faker.datatype.uuid();
  const address = faker.address.direction();
  const updatedPlace = await updatePlace(id, address);
  expect(updatedPlace).toEqual('62574cf309af6a16c83c8152');
});

test('given an id and address, when update a place and not found, then return a object of type boom with 404', async () => {
  const id = faker.datatype.uuid();
  const address = faker.address.direction();
  updatePlace(id, address)
    .catch((error) => expect(error).toEqual(
      expect.objectContaining(
        boom.notFound('[geolocation:getPlaces]: No place found with id: ', id),
      ),
    ));
});

test('given an id and address, when a update failed, then return a object of type boom with 500', async () => {
  const id = faker.datatype.uuid();
  const address = faker.address.direction();
  updatePlace(id, address)
    .catch((error) => expect(error).toEqual(
      expect.objectContaining(
        boom.internal('[geolocation:getPlaces]: Cannot update the place with id: ', id),
      ),
    ));
});
