// External dependencies
const Mongoose = require('mongoose');

// Internal dependencies
const Logger = require('../../utils/logger');
const {
  uri,
  authSource,
  username,
  password,
} = require('../../../config/mongodb');

Mongoose.Promise = global.Promise;

const db = Mongoose.createConnection(uri, {
  authSource,
  auth: {
    username,
    password,
  },
});

db.on('error', (err) => {
  Logger.error(`[mongodb]: Connection error event ${err.message}`);
  process.exit(1);
});

db.once('open', () => Logger.info('[mongodb]: Connection oppened'));
db.once('connected', () => Logger.debug('[mongodb]: Client connection oppened'));
db.once('disconnected', () => Logger.debug('[mongodb]: Client was disconnected'));

process.on('SIGINT', () => {
  db.close(() => {
    Logger.info('[mongodb]: Connection was forced to be disconnected');

    process.exit(1);
  });
});

module.exports = db;
