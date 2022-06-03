const getBookmarkSchema = {
  description: 'Create new bookmark',
  tags: ['Users'],
  params: {
    type: 'object',
    required: ['userId'],
    properties: {
      userId: { type: 'string' },
    },
  },
};

module.exports = getBookmarkSchema;
