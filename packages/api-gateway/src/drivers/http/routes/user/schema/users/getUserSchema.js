const getUserSchema = {
  description: 'validate user',
  tags: ['Users'],
  params: {
    type: 'object',
    required: ['userId'],
    properties: {
      userId: { type: 'string' },
    },
  },
};

module.exports = getUserSchema;
