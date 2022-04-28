const createPlaceSchema = {
  description:
    'Create a place for geolocation services',
  tags: ['Geolocation'],
  security: [{ Bearer: [] }],
  body: {
    type: 'object',
    properties: {
      location: {
        type: 'array',
        minItems: 2,
        maxItems: 2,
        items: { type: 'number' },
        description: 'lon and lat for the place',
      },
      country: { type: 'string', description: 'place country' },
      state: { type: 'string', description: 'state of the place' },
      city: { type: 'string', description: 'city of the place' },
      zipcode: { type: 'string', description: 'zip code of the place' },
      streetAddress: { type: 'string', description: 'street address of the place' },
      placeDBId: { type: 'string', description: 'place ID stored in the places database' },
      price: { type: 'number', description: 'price of the place' },
    },
    required: [
      'location',
      'country',
      'state',
      'city',
      'zipcode',
      'streetAddress',
      'placeDBId',
      'price',
    ],
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
  createPlaceSchema,
  getPlacesSchema,
  getAddressSchema,
};
