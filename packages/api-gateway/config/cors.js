const prefix = require('./environment');

module.exports = {
  domains: process.env[`${prefix}DOMAINS`],
};
