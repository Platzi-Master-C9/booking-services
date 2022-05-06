// Services
const { getPlaces, updatePlace } = require('./useCases');

// Domains
const { geoNearQuery, updatePlaceQuery } = require('./domains');

module.exports = {
  getPlaces: getPlaces(geoNearQuery),
  updatePlace: updatePlace(updatePlaceQuery),
};
