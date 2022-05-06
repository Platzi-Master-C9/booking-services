// Services
const { updatePlace } = require('./useCases');

// Domains
const { updatePlaceQuery } = require('./domains');

module.exports = {
  updatePlace: updatePlace(updatePlaceQuery),
};
