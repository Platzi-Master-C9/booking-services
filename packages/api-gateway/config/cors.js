const prefix = require('./environment');

module.exports = {
  domain: process.env[`${prefix}CORS_DOMAIN`],
};
