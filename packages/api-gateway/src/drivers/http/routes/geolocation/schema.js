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

const deletePlaceSchema = {
  description:
    'Given a placeId when a user delte a place, then delete the geolocation place in geolocation db.',
  tags: ['Geolocation'],
  security: [{ Bearer: [] }],
  querystring: {
    type: 'object',
    properties: {
      placeId: { type: 'string', description: 'Id from a place' },
    },
    required: ['placeId'],
  },
};

module.exports = {
  getPlacesSchema,
  getAddressSchema,
  deletePlaceSchema,
};
