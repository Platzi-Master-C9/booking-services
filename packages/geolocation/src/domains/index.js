// Domains
const { geoNearQuery } = require('./geolocation');

// Drivers
const connection = require('../drivers/mongodb/connection');

module.exports = {
  geoNearQuery: geoNearQuery(connection),
};
