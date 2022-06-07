// domains
const { createPlaceQuery } = require('./places');

// drivers
const mongodb = require('../drivers/mongodb/connection');

module.exports = {
    createPlaceQuery: createPlaceQuery(mongodb),
};
