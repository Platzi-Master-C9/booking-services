const reverseGeocodingQuery = (connection) => async (lon, lat) => {
  const collection = await connection();
  return collection.findOne({
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [lon, lat],
        },
      },
    },
  });
};

module.exports = {
  reverseGeocodingQuery,
};
