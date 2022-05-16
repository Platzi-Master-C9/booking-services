// External dependencies
const dotenv = require('dotenv');
// Internal dependencies
const { path } = require('./environment');

dotenv.config({ path });

const getMongoCredentials = (prefix) => {
  const credentials = {
    authSource: process.env[`${prefix}_MONGO_AUTH_SOURCE`],
    uri: process.env[`${prefix}_MONGO_URI`],
    username: process.env[`${prefix}_MONGO_USER`],
    password: process.env[`${prefix}_MONGO_PASSWORD`],
  };
  const credentialsEntries = Object.entries(credentials);

  for (let i = 1; i < credentialsEntries.length; i += 1) {
    if (credentialsEntries[i][1] === undefined) {
      throw new Error(`You don't have ${credentialsEntries[i][0]} in your environment vars prefix ${prefix}`);
    }
  }

  return credentials;
};

module.exports = getMongoCredentials;
