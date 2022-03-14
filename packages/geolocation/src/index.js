'use strict';

/**
 * @description Export all features and business rules from the package
 */

const welcome = require('./utils/welcomePackage');
const { Place } = require('./useCases/index');

module.exports = {
  geolocationWelcome: welcome,
  Place: Place,
};
