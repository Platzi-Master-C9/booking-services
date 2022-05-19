const prefix = require('./environment');

module.exports = {
  domain: process.env[`${prefix}CORS_DOMAIN`],
  credentials: true,
  methods: [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
    'OPTIONS',
  ],
};
