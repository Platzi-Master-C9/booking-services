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

module.exports = {
  getPlaces,
};
