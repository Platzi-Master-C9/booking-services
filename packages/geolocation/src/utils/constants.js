// Constants to set the environment
const supportedEnvs = {
  PRODUCTION: 'production',
  DEVELOP: 'develop',
};

// Options and settings for the DB
const dbOptions = {
  dbName: 'geolocation',
  collectionName: 'places',
};

const nodeGeocoderOptions = {
  provider: 'openstreetmap',
};

module.exports = {
  supportedEnvs,
  dbOptions,
  nodeGeocoderOptions,
};
