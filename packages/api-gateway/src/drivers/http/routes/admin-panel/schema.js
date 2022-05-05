// TODO_JAIRO: schema doesn't work propertly
const defaultSchema = {
  description: 'Index Route',
  tags: ['Administration panel'],
};

const changeUSerStatusSchema = {
  description: 'change user status: Given a status and a reason, change the status of a user and send a notification to the user',
  tags: ['Administration panel'],
  body: {
    type: 'object',
    properties: {
      status: { type: 'string' },
      reason: { type: 'string' },
    },
    required: ['status', 'reason'],
  },
  params: {
    type: 'object',
    properties: {
      user_id: { type: 'number' },
    },
    required: ['user_id'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: { type: 'string' },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const userListSchema = {
  description: 'Get a list of users',
  tags: ['Administration panel'],
  querystring: {
    type: 'object',
    properties: {
      status: { type: 'string' },
      fullName: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              fullName: { type: 'string' },
              urlImage: { type: 'string' },
              dateOfRegister: { type: 'string' },
              status: { type: 'string' },
            },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const userDetailSchema = {
  description: 'Get a user detail',
  tags: ['Administration panel'],
  params: {
    type: 'object',
    properties: {
      user_id: { type: 'number' },
    },
    required: ['user_id'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            fullName: { type: 'string' },
            urlImage: { type: 'string' },
            dateOfRegister: { type: 'string' },
            status: { type: 'string' },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const adminIDSchema = {
  description: 'Query admin info: given id, get admin data',
  tags: ['Administration panel'],
  params: {
    type: 'object',
    properties: {
      admin_id: { type: 'number' },
    },
    required: ['admin_id'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            fullName: { type: 'string' },
            urlImage: { type: 'string' },
            profile: { type: 'number' },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};


const placesListSchema = {
  description: 'Get a list of places',
  tags: ['Administration panel'],
  querystring: {
    type: 'object',
    properties: {
      status: { type: 'string' },
      placeName: { type: 'string' },
      hostName: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            fullName: { type: 'string' },
            urlImage: { type: 'string' },
            profile: { type: 'number' },
          },
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              placeName: { type: 'string' },
              hostName: { type: 'string' },
              status: { type: 'string' },
            },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

module.exports = {
  defaultSchema,
  changeUSerStatusSchema,
  userListSchema,
  userDetailSchema,
  adminIDSchema,
  placesListSchema,
};
