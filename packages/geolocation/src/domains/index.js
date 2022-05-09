// Domains
const { geoNearQuery, deletePlaceQuery, updatePlaceQuery, } = require('./places');

// Drivers
const connection = require('../drivers/mongodb/connection');

module.exports = {
  geoNearQuery: geoNearQuery(connection),
  deletePlaceQuery: deletePlaceQuery(connection),
  updatePlaceQuery: updatePlaceQuery(connection),
};
