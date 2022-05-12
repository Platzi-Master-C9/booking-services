// External dependencies
const dotenv = require('dotenv');
// Internal dependencies
const { path } = require('./environment');

dotenv.config({ path });

const getMongoCredentials = (preffix) => {
  const credentials = {
    uri: process.env[`${preffix}_MONGO_URI`],
    username: process.env[`${preffix}_MONGO_USER`],
    password: process.env[`${preffix}_MONGO_PASSWORD`],
    authSource: process.env[`${preffix}_MONGO_AUTH_SOURCE`],
  };
  const credentialsEntries = Object.entries(credentials);

  for (let i = 0; i < credentialsEntries.length; i += 1) {
    if (credentialsEntries[i][1] === undefined) {
      throw new Error(`You don't have ${credentialsEntries[i][0]} in your environment vars`);
    }
  }

  return credentials;
};

module.exports = getMongoCredentials;
