// Domains
const { deletePlaceQuery } = require('./places');
const { updatePlaceQuery } = require('./places');

// Drivers
const connection = require('../drivers/mongodb/connection');

module.exports = {
  deletePlaceQuery: deletePlaceQuery(connection),
  updatePlaceQuery: updatePlaceQuery(connection),
};
