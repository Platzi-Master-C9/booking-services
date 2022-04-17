// Domains
const { deletePlaceQuery } = require('./places');

// Drivers
const connection = require('../drivers/mongodb/connection');

module.exports = {
  deletePlaceQuery: deletePlaceQuery(connection),
};
