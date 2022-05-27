const { ObjectId } = require('mongodb');

const geoNearQuery = (connection) => async (lon, lat, maxDistance = 1000) => {
  const options = [
    {
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lon, lat],
          },
          $maxDistance: maxDistance,
        },
      },
      deleted_at: { $eq: null },
    },
    { projection: { created_at: 0, updated_at: 0, deleted_at: 0 } },
  ];
  const results = await connection('find', options);
  return results;
};

const updatePlaceQuery = (connection) => async (id, newValues) => {
  const options = [
    { _id: ObjectId(id) },
    { $set: newValues, $currentDate: { updated_at: true } },
  ];
  const results = await connection('updateOne', options);
  return results;
};

const deletePlaceQuery = (connection) => async (id) => {
  const options = [
    { _id: ObjectId(id) },
    { $currentDate: { deleted_at: true } },
  ];
  const results = await connection('updateOne', options);
  return results;
};

const getPlaceQuery = (connection) => async (id) => {
  const options = [{ _id: ObjectId(id), deleted_at: { $eq: null } }];
  const result = await connection('findOne', options);
  return result;
};

const geocodingQuery = (geoCoder) => async (address) => {
  const result = await geoCoder.geocode(address);
  return result;
};

const reverseGeocodingQuery = (geoCoder) => async (lon, lat) => {
  const result = await geoCoder.reverse({ lat, lon });
  return result;
};

module.exports = {
  geoNearQuery,
  deletePlaceQuery,
  updatePlaceQuery,
  getPlaceQuery,
  geocodingQuery,
  reverseGeocodingQuery,
};
