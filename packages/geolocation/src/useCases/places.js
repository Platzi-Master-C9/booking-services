'use strict';
const boom = require('@hapi/boom');

const deletePlace = (deletePlaceQuery) => async (id) => {
  const results = await deletePlaceQuery(id);
  if (!results.matchedCount) {
    throw boom.notFound(
      `[geolocation:getPlaces]: No place found with id: ${id}`
    );
  }
  if (!results.modifiedCount) {
    throw boom.internal(
      `[geolocation:getPlaces]: Cannot delete the place with id: ${id}`
    );
  }
  return id;
};

module.exports = {
  deletePlace,
};
