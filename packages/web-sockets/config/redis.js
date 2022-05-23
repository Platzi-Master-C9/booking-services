/* eslint-disable dot-notation */
// External dependencies
const dotenv = require('dotenv');

// Internal dependencies
const path = require('./environment');

dotenv.config({ path });

module.exports = {
  host: process.env.WB_REDIS_HOST,
  port: process.env.WB_REDIS_PORT,
  password: process.env.WB_REDIS_PASSWORD,
};
