const boom = require('@hapi/boom');

const getPlaces = (geoNearQuery) => async (lon, lat, maxDistance) => {
  if (!lon && !lat) {
    throw boom.badRequest(
      '[geolocation:getPlaces]: latitude and longitude are required',
    );
  }
  const results = await geoNearQuery(lon, lat, maxDistance);
  if (!results.length) {
    throw boom.notFound('[geolocation:getPlaces]: No places found', results);
  }
  return results;
};

const deletePlace = (deletePlaceQuery) => async (id) => {
  const results = await deletePlaceQuery(id);
  if (!results.matchedCount) {
    throw boom.notFound(
      `[geolocation:getPlaces]: No place found with id: ${id}`,
    );
  }
  if (!results.modifiedCount) {
    throw boom.internal(
      `[geolocation:getPlaces]: Cannot delete the place with id: ${id}`,
    );
  }
  return id;
};

const updatePlace = (updatePlaceQuery) => async (id, streetAddress) => {
  const results = await updatePlaceQuery(id, { street_address: streetAddress });
  if (!results.matchedCount) {
    throw boom.notFound(
      `[geolocation:getPlaces]: No place found with id: ${id}`,
    );
  }
  if (!results.modifiedCount) {
    throw boom.internal(
      `[geolocation:getPlaces]: Cannot update the place with id: ${id}`,
    );
  }
  return id;
};

const getPlace = (getPlaceQuery) => async (id) => {
  const result = await getPlaceQuery(id);
  if (!result) {
    throw boom.notFound(
      `[geolocation:getPlace]: No place found with id: ${id}`,
    );
  }
  return result;
};

const geocoding = (geocodingQuery) => async (street, city, state, zipcode, country) => {
  const result = await geocodingQuery(`${street} ${city} ${state} ${zipcode} ${country}`);
  return result;
};

const reverseGeocoding = (reverseGeocodingQuery) => async (lon, lat) => {
  const result = await reverseGeocodingQuery(lon, lat);
  return result;
};

module.exports = {
  getPlaces,
  deletePlace,
  updatePlace,
  getPlace,
  geocoding,
  reverseGeocoding,
};
