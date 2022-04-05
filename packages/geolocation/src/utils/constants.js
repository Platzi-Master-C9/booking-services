'use strict';

/**
 * @description Constants to set the environment
 */
const supportedEnvs = {
  PRODUCTION: 'production',
  DEVELOP: 'develop',
};

/**
 * @description Options and settings for the DB
 */
const dbOptions = {
  name: 'geolocation',
  collection: 'places',
};

module.exports = {
  supportedEnvs,
  dbOptions,
};
