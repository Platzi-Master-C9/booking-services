/** @type {import('fastify').RouteOptions['schema']} */
const sumOperationSchema = {
  description: 'Add two numbers',
  tags: ['Math'],
  body: {
    type: 'object',
    properties: {
      inputA: { type: 'number' },
      inputB: { type: 'number' },
    },
    required: ['inputA', 'inputB'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: { type: 'number' },
      },
    },
  },
};

module.exports = sumOperationSchema;
