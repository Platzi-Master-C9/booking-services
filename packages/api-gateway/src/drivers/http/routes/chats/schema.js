/** @type {import('fastify').RouteOptions['schema']} */
const listChatRoomsSchema = {
  description: 'List the chat rooms of the requesting user.',
  tags: ['Messages'],
  security: [{ Bearer: [] }],
  querystring: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'Page number',
        minimum: 1,
        default: 1,
      },
    },
    required: ['page'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        page: { type: 'integer' },
        pages: { type: 'integer' },
        rows: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              bookingId: { type: 'string' },
              hostId: { type: 'string' },
              customerId: { type: 'string' },
              lastMessage: {
                type: 'object',
                nullable: true,
                properties: {
                  _id: { type: 'string' },
                  chatId: { type: 'string' },
                  text: { type: 'string' },
                  createdAt: { type: 'string' },
                  createdBy: { type: 'string' },
                },
              },
              createdAt: { type: 'string' },
              updatedAt: { type: 'string' },
            },
          },
        },
      },
    },
  },
};

module.exports = {
  listChatRoomsSchema,
};
