// Domains
const {
  geoNearQuery,
  deletePlaceQuery,
  updatePlaceQuery,
  getPlaceQuery,
  geocodingQuery,
  reverseGeocodingQuery,
} = require('./places');

// Drivers
const mongodb = require('../drivers/mongodb/connection');
const nodeGeocoder = require('../drivers/nodeGeocoder/connections');

module.exports = {
  geoNearQuery: geoNearQuery(mongodb),
  deletePlaceQuery: deletePlaceQuery(mongodb),
  updatePlaceQuery: updatePlaceQuery(mongodb),
  getPlaceQuery: getPlaceQuery(mongodb),
  geocodingQuery: geocodingQuery(nodeGeocoder),
  reverseGeocodingQuery: reverseGeocodingQuery(nodeGeocoder),
};
