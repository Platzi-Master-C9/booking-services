'use strict';

const supportedEnvs = {
  PRODUCTION: 'production',
  DEVELOP: 'develop',
};

const dbOptions = {
  name: 'geolocation',
  collection: 'places',
};

module.exports = {
  supportedEnvs,
  dbOptions,
};
