// Services
const { getPlaces, updatePlaces } = require('./useCases');

// Domains
const { geoNearQuery, updatePlaceQuery } = require('./domains');

module.exports = {
  getPlaces: getPlaces(geoNearQuery),
  updatePlace: updatePlace(updatePlaceQuery),
};
