// External dependencies
const Mongoose = require('mongoose');

// Internal dependencies
const getMongoCredentials = require('./get-mongo-credentials');
const { setupMongoEvents } = require('./connection-info');

Mongoose.Promise = global.Promise;

const createMongoConnection = (prefix) => {
  if (typeof prefix !== 'string') throw new Error('prefix should be a string');

  const uri = getMongoCredentials(prefix);
  const db = Mongoose.createConnection(uri);

  setupMongoEvents(db);

  return db;
};

module.exports = createMongoConnection;
