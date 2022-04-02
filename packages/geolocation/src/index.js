'use strict';

// Services
const { reverseGeocoding } = require('./useCases');

// Domains
const { reverseGeocodingQuery } = require('./domains');

module.exports = {
  reverseGeocoding: reverseGeocoding(reverseGeocodingQuery),
};
