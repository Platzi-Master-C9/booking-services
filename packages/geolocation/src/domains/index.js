// Domains
const { updatePlaceQuery } = require('./places');

// Drivers
const connection = require('../drivers/mongodb/connection');

module.exports = {
  updatePlaceQuery: updatePlaceQuery(connection),
};
