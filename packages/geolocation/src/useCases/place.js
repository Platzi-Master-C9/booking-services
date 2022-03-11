'use strict';
const boom = require('@hapi/boom');

class Place {
  constructor() {
    this.places = [
      { id: 'sdf7s6f4s', lat: 45.46546, lon: -58.15646 },
      { id: 'asd45qdqs', lat: 86.46546, lon: -34.15646 },
      { id: 'fs45qqads', lat: 58.46546, lon: -12.15646 },
      { id: '6a5sd46as', lat: 17.46546, lon: -91.15646 },
    ];
  }

  async getPlaces() {
    try {
      return this.places;
    } catch (error) {
      throw boom.boomify(error, { statusCode: 500 });
    }
  }
}

module.exports = Place;
