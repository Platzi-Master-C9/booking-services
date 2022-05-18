// External dependencies
const dotenv = require('dotenv');

// Internal dependencies
const { path } = require('../../../config/environment');

dotenv.config({ path });

const getMongoCredentials = (prefix) => {
  const prefixUppercase = prefix.replace(/-/g, '_').toUpperCase();

  const envVar = `${prefixUppercase}_MONGO_URI`;
  const uri = process.env[envVar];

  if (!uri) throw new Error(`Could not find ${envVar} in your environment`);

  return uri;
};

module.exports = getMongoCredentials;
