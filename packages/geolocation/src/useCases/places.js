const boom = require('@hapi/boom');

const updatePlace = (updatePlaceQuery) => async (id, streetAddress) => {
  const results = await updatePlaceQuery(id, { street_address: streetAddress });
  if (!results.matchedCount) {
    throw boom.notFound('[geolocation:getPlaces]: No place found with id: ', id);
  }
  if (!results.modifiedCount) {
    throw boom.internal('[geolocation:getPlaces]: Cannot update the place with id: ', id);
  }
  return id;
};

module.exports = {
  updatePlace,
};
