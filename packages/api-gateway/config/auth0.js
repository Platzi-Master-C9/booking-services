'use strict';

const prefix = require('./environment');

module.exports = {
  domain: process.env[`${prefix}AUTH0_DOMAIN`],
  audience: process.env[`${prefix}AUTH0_AUDIENCE`],
}
