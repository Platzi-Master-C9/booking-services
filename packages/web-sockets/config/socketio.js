// External dependencies
const dotenv = require('dotenv');

// Internal dependencies
const path = require('./environment');

dotenv.config({ path });

module.exports = {
  methods: process.env.WB_METHODS_CORS,
  credentials: process.env.WB_CREDENTIALS_CORS,
  origin: process.env.WB_ORIGIN_CORS.split(',') || '*',
};
