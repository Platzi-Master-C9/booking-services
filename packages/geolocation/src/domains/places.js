const { ObjectId } = require('mongodb');

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
};
