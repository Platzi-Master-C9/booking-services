// External dependencies
const Mongoose = require('mongoose');

// Internal dependencies
const generateSuffix = require('../../utils/generate-suffix');
const getMongoCredentials = require('../../../config/get-mongo-credentials');
const showConnectionInfo = require('./connection-info');

Mongoose.Promise = global.Promise;

const createMongoConnection = (packageName) => {
  if (typeof packageName !== 'string') throw new Error('packageName should be a string');

  const suffix = generateSuffix(packageName);
  const credentials = getMongoCredentials(suffix);

  const db = Mongoose.createConnection(credentials.uri, {
    authSource: credentials.authSource,
    auth: {
      username: credentials.username,
      password: credentials.password,
    },
  });

  showConnectionInfo(db);

  return db;
};

module.exports = createMongoConnection;
