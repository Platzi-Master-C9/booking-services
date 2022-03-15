'use strict';
const boom = require('@hapi/boom');

const getPlaces = (geoNearQuery) => {
  return async function (lon, lat, maxDistance) {
    let places = [];
    if (!lon && !lat) {
      throw boom.badRequest(
        `[geolocation:getPlaces]: latitude and longitude are required`
      );
    }
    const results = await geoNearQuery(lon, lat, maxDistance);
    if (!results) {
      throw boom.notFound('[geolocation:getPlaces]: No places found');
    }
    for await (const doc of results) {
      places = [...places, doc];
    }
    return places;
  };
};

module.exports = {
  getPlaces,
};
