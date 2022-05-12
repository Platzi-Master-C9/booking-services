// External dependencies
const Mongoose = require('mongoose');

// Internal dependencies
const generatePreffix = require('../../utils/generate-preffix');
const getMongoCredentials = require('../../../config/get-mongo-credentials');
const showConnectionInfo = require('./connection-info');

Mongoose.Promise = global.Promise;

const createMongoConnection = (packageName) => {
  if (typeof packageName !== 'string') throw new Error('packageName should be a string');

  const preffix = generatePreffix(packageName);
  const credentials = getMongoCredentials(preffix);

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
