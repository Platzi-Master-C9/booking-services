/**
 * @description Export all features and business rules from the package
 */

// Services
const {
  getPlaces,
  updatePlace,
  deletePlace,
  getPlace,
  geocoding,
  reverseGeocoding,
  createPlace,
} = require('./useCases');

// Domains
const {
  geoNearQuery,
  updatePlaceQuery,
  deletePlaceQuery,
  getPlaceQuery,
  geocodingQuery,
  reverseGeocodingQuery,
  createPlaceQuery,
} = require('./domains');

module.exports = {
  getPlaces: getPlaces(geoNearQuery),
  deletePlace: deletePlace(deletePlaceQuery),
  updatePlace: updatePlace(updatePlaceQuery),
  getPlace: getPlace(getPlaceQuery),
  geocoding: geocoding(geocodingQuery),
  reverseGeocoding: reverseGeocoding(reverseGeocodingQuery),
  createPlace: createPlace(createPlaceQuery, geocoding(geocodingQuery)),
};
