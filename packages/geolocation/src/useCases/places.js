const boom = require('@hapi/boom');

const getPlaces = (geoNearQuery) => async (lon, lat, maxDistance) => {
  if (!lon && !lat) {
    throw boom.badRequest('[geolocation:getPlaces]: latitude and longitude are required');
  }
  const results = await geoNearQuery(lon, lat, maxDistance);
  if (!results.length) {
    throw boom.notFound('[geolocation:getPlaces]: No places found', results);
  }
  return results;
};

const updatePlace = (updatePlaceQuery) => async (id, streetAddress) => {
  const results = await updatePlaceQuery(id, { street_address: streetAddress });
  if (!results.matchedCount) {
    throw boom.notFound(`[geolocation:getPlaces]: No place found with id: ${id}`);
  }
  if (!results.modifiedCount) {
    throw boom.internal(`[geolocation:getPlaces]: Cannot update the place with id: ${id}`);
  }
  return id;
};

module.exports = {
  getPlaces,
  updatePlace,
};
