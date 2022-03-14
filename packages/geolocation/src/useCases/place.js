'use strict';
const boom = require('@hapi/boom');
const client = require('../drivers/mongodb/connection');

class Place {
  constructor() {}

  /**
   * @desc Get all places on a sphere based on longitude and latitude
   * @param {number} longitude
   * @param {number} latitude
   * @returns {Array} Array of places
   * @example
   * getPlaces(47.165465, -70.16546)
   * // => return an array  with the places
   * [
   *   {
   *     location: {type: 'Point', coordinates: [-73.9667, 40.78]},
   *     country: 'French Guiana',
   *     state: 'Mississippi',
   *     city: 'Earlinehaven',
   *     postcode: '44506-8590',
   *     streetAddress: '591 Wiza Rest'
   *   }
   * ]
   */
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
