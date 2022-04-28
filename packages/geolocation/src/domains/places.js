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
  ];
  const results = await connection('find', options);
  return results;
};

module.exports = {
  geoNearQuery,
};
