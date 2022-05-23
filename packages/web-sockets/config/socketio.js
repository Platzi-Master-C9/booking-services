// External dependencies
const dotenv = require('dotenv');

// Internal dependencies
const path = require('./environment');

dotenv.config({ path });

let origin = process.env.WB_ORIGIN_CORS;

if (origin === undefined) origin = '*';
else origin = origin.split(',');

module.exports = {
  methods: process.env.WB_METHODS_CORS,
  credentials: process.env.WB_CREDENTIALS_CORS,
  origin,
};
