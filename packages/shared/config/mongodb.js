// Internal dependencies
const { suffix } = require('./environment');

module.exports = {
  uri: process.env[`${suffix}.MONGO.URI`],
  username: process.env[`${suffix}.MONGO.USER`],
  password: process.env[`${suffix}.MONGO.PASSWORD`],
  authSource: process.env[`${suffix}.MONGO.AUTH.SOURCE`],
};
