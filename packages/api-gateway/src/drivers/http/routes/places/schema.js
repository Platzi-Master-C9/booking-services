/** @type {import('fastify').RouteOptions['schema']} */

const postPlaceSchema = {
  description: 'This is the route to use for creating a new place',
  tags: ['Places'],
  body: {
    type: 'object',
    properties: {
      place_name: { type: 'string' },
      price_per_night_usd: { type: 'number' },
      host_id: { type: 'number' },
      type: { type: 'string' },
    },
    required: [
      'place_name',
      'price_per_night_usd',
      'host_id',
      'type',
    ],
  },
};

const getPlacesSchema = {
  description: 'Route for getting all the places',
  tags: ['Places'],
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        total: { type: 'number' },
        places: { type: 'array' },
      },
    },
  },
};

module.exports = {
  postPlaceSchema,
  getPlacesSchema,
};
