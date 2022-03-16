const geoNearQuery =
  (connection) =>
  async (lon, lat, maxDistance = 1000) => {
    const collection = await connection();
    return collection.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lon, lat],
          },
          $maxDistance: maxDistance,
        },
      },
    });
  };

module.exports = {
  geoNearQuery,
};
