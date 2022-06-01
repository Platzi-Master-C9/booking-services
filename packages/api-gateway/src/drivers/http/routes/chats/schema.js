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
      userId: { type: 'string' },
    },
    required: ['page'],
  },
  response: {
    200: paginatedSchema({
      type: 'object',
      properties: {
        _id: { type: 'string' },
        placeId: { type: 'string' },
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
      userId: { type: 'string' },
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
const openChatSchema = {
  description: 'Open a chat room.',
  tags: ['Messages'],
  security: [{ Bearer: [] }],
  body: {
    type: 'object',
    properties: {
      hostId: { type: 'string' },
      customerId: { type: 'string' },
      placeId: { type: 'string' },
    },
    required: [
      'hostId',
      'customerId',
      'placeId',
    ],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        _id: { type: 'string' },
        placeId: { type: 'string' },
        hostId: { type: 'string' },
        customerId: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
      },
    },
    201: {
      type: 'object',
      properties: {
        _id: { type: 'string' },
        placeId: { type: 'string' },
        hostId: { type: 'string' },
        customerId: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
      },
    },
  },
};

const createMessageSchema = {
  description: 'Create a message in a chat room.',
  tags: ['Messages'],
  security: [{ Bearer: [] }],
  params: {
    type: 'object',
    properties: {
      chatId: { type: 'string' },
    },
    required: ['chatId'],
  },
  body: {
    type: 'object',
    properties: {
      text: { type: 'string' },
      createdBy: { type: 'string' },
    },
    required: ['text', 'createdBy'],
  },
  response: {
    201: {
      type: 'object',
      properties: MESSAGE_PROPS,
    },
  },
};

module.exports = {
  listChatRoomsSchema,
  listChatMessagesSchema,
  openChatSchema,
  createMessageSchema,
};
