'use strict';

/**
 * @description Export all features and business rules from the package
 */

// Services
const { deletePlace } = require('./useCases');

// Domains
const { deletePlaceQuery } = require('./domains');
const welcome = require('./utils/welcomePackage');

module.exports = {
  geolocationWelcome: welcome,
  deletePlace: deletePlace(deletePlaceQuery),
};
