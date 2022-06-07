const updatePlaceSchema = {
  description: 'update place from geolocation DB: Given an Id, update the place with Id in the geolocation DB',
  tags: ['Geolocation'],
  security: [{ Bearer: [] }],
  querystring: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'place Id' },
      address: { type: 'string', description: 'address to update' },
    },
    required: ['id', 'address'],
  },
};

const createPlaceSchema = {
  description:
    'Given latitude and longitude when a user select a mark in a map, then insert a place in geolocation database.',
  tags: ['Geolocation'],
  security: [{ Bearer: [] }],
  body: {
    type: 'object',
    properties: {
      lat: { type: 'number', description: 'Longitude' },
      lon: { type: 'number', description: 'Latitude' },
      country: { type: 'string', description: 'Country' },
      state: { type: 'string', description: 'State' },
      city: { type: 'string', description: 'City' },
      zipcode: { type: 'string', description: 'Zipcode' },
      street: { type: 'string', description: 'street' },
      price: { type: 'number', description: 'Price' },
      place_db_id: { type: 'string', description: 'Place id saved in the databese of places' },
    },
    required: [
      'lat',
      'lon',
      'price',
      'place_db_id',
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

const getPlaceSchema = {
  description:
    'Given an id, when is required, then return the place stored in the DB.',
  tags: ['Geolocation'],
  security: [{ Bearer: [] }],
  querystring: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'place id' },
    },
    required: ['id'],
  },
};

const deletePlaceSchema = {
  description:
    'Given a placeId when a user delete a place, then delete the geolocation place in geolocation db.',
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
  updatePlaceSchema,
  createPlaceSchema,
  getPlacesSchema,
  getAddressSchema,
  deletePlaceSchema,
  getPlaceSchema,
};
