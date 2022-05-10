/**
 * @description Export all features and business rules from the package
 */

// Services
const { getPlaces, updatePlace, deletePlace } = require('./useCases');

// Domains
const { geoNearQuery, updatePlaceQuery, deletePlaceQuery } = require('./domains');

module.exports = {
  getPlaces: getPlaces(geoNearQuery),
  deletePlace: deletePlace(deletePlaceQuery),
  updatePlace: updatePlace(updatePlaceQuery),
};
