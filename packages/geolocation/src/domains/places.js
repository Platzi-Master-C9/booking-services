const { ObjectId } = require('mongodb');

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

module.exports = {
  deletePlaceQuery,
  updatePlaceQuery,
};
