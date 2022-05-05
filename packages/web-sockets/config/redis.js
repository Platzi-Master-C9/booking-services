// External dependencies
const dotenv = require('dotenv');

// Internal dependencies
const path = require('./environment');

dotenv.config({ path });

module.exports = {
  url: process.env['WEB.SOCKET.REDIS.URI'],
};
