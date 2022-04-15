// TODO_JAIRO: schema doesn't work propertly
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
module.exports = changeUSerStatusSchema;
