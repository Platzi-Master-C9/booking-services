// Domains
const { reverseGeocodingQuery } = require('./geolocation');

// Drivers
const connection = require('../drivers/mongodb/connection');

module.exports = {
  reverseGeocodingQuery: reverseGeocodingQuery(connection),
};
