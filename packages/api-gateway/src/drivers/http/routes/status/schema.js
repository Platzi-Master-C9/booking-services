/** @type {import('fastify').RouteOptions['schema']} */
const serveStatusSchema = {
  description: 'Get the status of the server',
  tags: ['Status'],
  response: {
    200: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          description: 'The status of the server',
        },
      },
    },
  },
};

module.exports = {
  serveStatusSchema,
};
