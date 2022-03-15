'use strict';

// Services
const welcome = require('./utils/welcomePackage');
const { getPlaces } = require('./useCases');

// Domains
const { geoNearQuery } = require('./domains');

module.exports = {
  geolocationWelcome: welcome,
  getPlaces: getPlaces(geoNearQuery),
};
