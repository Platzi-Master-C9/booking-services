const updatePlaceSchema = {
  description: 'update place from geolocation DB: Given an Id, update the place with Id in the geolocation DB',
  tags: ['Geolocation'],
  security: [{ Bearer: [] }],
  querystring: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'place Id' },
      address: { type: 'string', description: 'addres to update' },
    },
    required: ['id', 'address'],
  },
};

const getPlacesSchema = {
  description:
    'Given latitude, longitude and radius when a user select a mark in a map, then return an array with near places details from database.',
  tags: ['Geolocation'],
  security: [{ Bearer: [] }],
  querystring: {
    type: 'object',
    properties: {
      lon: { type: 'number', description: 'Longitude' },
      lat: { type: 'number', description: 'Latitude' },
      radius: {
        type: 'number',
        description: 'Radius around a point on the map',
      },
    },
    required: [
      'lon',
      'lat',
      'radius',
    ],
  },
};

const getAddressSchema = {
  description:
    'Given latitude and longitude when a user select a mark in a map, then return an object with the address.',
  tags: ['Geolocation'],
  security: [{ Bearer: [] }],
  querystring: {
    type: 'object',
    properties: {
      lon: { type: 'number', description: 'Longitude' },
      lat: { type: 'number', description: 'Latitude' },
    },
    required: ['lon', 'lat'],
  },
};

module.exports = {
  updatePlaceSchema,
  getPlacesSchema,
  getAddressSchema,
};
