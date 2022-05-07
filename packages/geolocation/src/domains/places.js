const { ObjectId } = require('mongodb');

const updatePlaceQuery = (connection) => async (id, newValues) => {
  const options = [
    { _id: ObjectId(id) },
    { $set: newValues, $currentDate: { updated_at: true } },
  ];
  const results = await connection('updateOne', options);
  return results;
};

module.exports = {
  updatePlaceQuery,
};
