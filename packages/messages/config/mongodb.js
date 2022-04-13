const prefix = require('./environment');

module.exports = {
  uri: process.env[`${prefix}MS_MONGO_URI`],
  user: process.env[`${prefix}MS_MONGO_USER`],
  pass: process.env[`${prefix}MS_MONGO_PASS`],
};
