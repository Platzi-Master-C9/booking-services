'use strict';
const boom = require('@hapi/boom');
const schemaDestructuring = require('./../utils/schemaDestructuring');

const reverseGeocoding = (reverseGeocodingQuery) => {
  return async function (log, lat) {
    let place = {};
    if (!log || !lat) {
      throw boom.badRequest(
        `[geolocation:reverseGeocoding]: latitude and longitude are required`
      );
    }
    const result = await reverseGeocodingQuery(log, lat);

    place = schemaDestructuring(result, [
      '_id',
      'country',
      'state',
      'city',
      'postcode',
      'streetAddress',
    ]);

    if (!place || place === null) {
      throw boom.notFound(
        '[geolocation:reverseGeocoding]: No place found',
        place
      );
    }

    return place;
  };
};

module.exports = {
  reverseGeocoding,
};
