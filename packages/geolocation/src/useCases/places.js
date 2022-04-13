'use strict';
const boom = require('@hapi/boom');
const client = require('../drivers/mongodb/connection');

const getPlaces = (geoNearQuery) => {
  return async function (lon, lat, maxDistance) {
    let places = [];
    if (!lon && !lat) {
      throw boom.badRequest(
        `[geolocation:getPlaces]: latitude and longitude are required`
      );
    }
    const results = await geoNearQuery(lon, lat, maxDistance);
    for await (const doc of results) {
      places = [...places, doc];
    }
    if (!places.length) {
      throw boom.notFound('[geolocation:getPlaces]: No places found', places);
    }
    return places;
  };
};

module.exports = {
  getPlaces,
};
