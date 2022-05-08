// External dependencies
const dotenv = require('dotenv');

// Internal dependencies
const path = require('./environment');

dotenv.config({ path });

module.exports = {
  host: process.env['WEB.SOCKET.REDIS.HOST'],
  port: process.env['WEB.SOCKET.REDIS.PORT'],
  password: process.env['WEB.SOCKET.REDIS.PASSWORD'],
};
