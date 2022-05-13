// External dependencies
const Mongoose = require('mongoose');

// Internal dependencies
const getMongoCredentials = require('../../../config/get-mongo-credentials');
const showConnectionInfo = require('./connection-info');

Mongoose.Promise = global.Promise;

const createMongoConnection = (prefix) => {
  if (typeof prefix !== 'string') throw new Error('prefix should be a string');

  const credentials = getMongoCredentials(prefix.toUpperCase());

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
