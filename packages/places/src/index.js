// packages
const geolocation = require('@booking-services/geolocation');

// domains
const { createPlaceQuery } = require('./domains');

// services
const { createPlace } = require('./useCases');

module.exports = {
    createPlace: createPlace(createPlaceQuery, geolocation.createPlace),
};
