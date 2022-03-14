'use strict';
const boom = require('@hapi/boom');
const client = require('../drivers/mongodb/connection');

class Place {
  constructor() {}

  static async getPlaces(lon, lat) {
    let places = [];
    if (!lon && !lat) {
      throw boom.badRequest(
        `[geolocation:getPlaces]: latitude and longitude are required`
      );
    }
    const db = await client();
    const results = db.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: [lon, lat] },
          maxDistance: 10000,
          spherical: true,
          distanceField: 'calcDistance',
        },
      },
    ]);
    if (!results) {
      throw boom.notFound('[geolocation:getPlaces]: No places found');
    }
    for await (const doc of results) {
      places = [...places, doc];
    }
    return places;
  }
}

module.exports = Place;
