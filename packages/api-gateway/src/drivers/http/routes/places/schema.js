/** @type {import('fastify').RouteOptions['schema']} */

const postSchema = {
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

module.exports = {
  postSchema,
};
