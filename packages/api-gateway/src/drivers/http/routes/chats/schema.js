const MESSAGE_PROPS = {
  _id: { type: 'string' },
  chatId: { type: 'string' },
  text: { type: 'string' },
  createdAt: { type: 'string' },
  createdBy: { type: 'string' },
};

const PAGE_PARAM_PROPS = {
  type: 'integer',
  description: 'Page number',
  minimum: 1,
  default: 1,
};

const paginatedSchema = (props) => ({
  type: 'object',
  properties: {
    page: { type: 'integer' },
    pages: { type: 'integer' },
    rows: {
      type: 'array',
      items: props,
    },
  },
});

/** @type {import('fastify').RouteOptions['schema']} */
const listChatRoomsSchema = {
  description: 'List the chat rooms of the requesting user.',
  tags: ['Messages'],
  security: [{ Bearer: [] }],
  querystring: {
    type: 'object',
    properties: {
      page: PAGE_PARAM_PROPS,
    },
    required: ['page'],
  },
  response: {
    200: paginatedSchema({
      type: 'object',
      properties: {
        _id: { type: 'string' },
        bookingId: { type: 'string' },
        hostId: { type: 'string' },
        customerId: { type: 'string' },
        lastMessage: {
          type: 'object',
          nullable: true,
          properties: MESSAGE_PROPS,
        },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
      },
    }),
  },
};

/** @type {import('fastify').RouteOptions['schema']} */
const listChatMessagesSchema = {
  description: 'List the messages of the chat room.',
  tags: ['Messages'],
  security: [{ Bearer: [] }],
  querystring: {
    type: 'object',
    properties: {
      page: PAGE_PARAM_PROPS,
    },
    required: ['page'],
  },
  params: {
    type: 'object',
    properties: {
      chatId: { type: 'string' },
    },
    required: ['chatId'],
  },
  response: {
    200: paginatedSchema({
      type: 'object',
      properties: MESSAGE_PROPS,
    }),
  },
};

/** @type {import('fastify').RouteOptions['schema']} */
const saveNewMessageSchema = {
  description: 'Save new message in chat room.',
  tags: ['Messages'],
  security: [{ Bearer: [] }],
  params: {
    type: 'object',
    properties: {
      chatId: { type: 'string' },
      text: { type: 'string' },
    },
    required: ['chatId', 'text'],
  },
  response: {
    200: {
      type: 'object',
      properties: MESSAGE_PROPS,
    },
  },
};

module.exports = {
  listChatRoomsSchema,
  listChatMessagesSchema,
  saveNewMessageSchema,
};
