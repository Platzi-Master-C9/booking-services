const connection = require('../drivers/mongodb/connection');

const geoNearQuery = async (lon, lat, maxDistance) => {
  const collection = await connection();
  return collection.aggregate([
    {
      $geoNear: {
        near: { type: 'Point', coordinates: [lon, lat] },
        maxDistance: maxDistance,
        spherical: true,
        distanceField: 'calcDistance',
      },
    },
  ]);
};

module.exports = {
  geoNearQuery,
};
