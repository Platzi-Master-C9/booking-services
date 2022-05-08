/**
 * @description Export all features and business rules from the package
 */

// Services
const { updatePlace } = require('./useCases');
const { deletePlace } = require('./useCases');

// Domains
const { deletePlaceQuery } = require('./domains');
const { updatePlaceQuery } = require('./domains');
const welcome = require('./utils/welcomePackage');

module.exports = {
  geolocationWelcome: welcome,
  deletePlace: deletePlace(deletePlaceQuery),
  updatePlace: updatePlace(updatePlaceQuery),
};
