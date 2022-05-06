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

module.exports = {
  geoNearQuery,
  updatePlaceQuery,
};
