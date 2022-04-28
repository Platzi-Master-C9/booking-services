// Domains
const { geoNearQuery } = require('./places');

// Drivers
const connection = require('../drivers/mongodb/connection');

module.exports = {
  geoNearQuery: geoNearQuery(connection),
};
