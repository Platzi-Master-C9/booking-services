'use strict';

// Services
const { getPlaces } = require('./useCases');

// Domains
const { geoNearQuery } = require('./domains');

module.exports = {
  getPlaces: getPlaces(geoNearQuery),
};
