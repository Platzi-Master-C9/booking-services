/* eslint-disable dot-notation */
// External dependencies
const dotenv = require('dotenv');

// Internal dependencies
const path = require('./environment');

dotenv.config({ path });

module.exports = {
  host: process.env['WEB_SOCKET_REDIS_HOST'],
  port: process.env['WEB_SOCKET_REDIS_PORT'],
  password: process.env['WEB_SOCKET_REDIS_PASSWORD'],
};
