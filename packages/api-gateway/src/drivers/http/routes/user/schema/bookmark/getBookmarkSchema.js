const getBookmarkSchema = {
  description: 'Create new bookmark',
  tags: ['Users'],
  params: {
    type: 'object',
    required: ['userId', 'bookmarkId'],
    properties: {
      userId: { type: 'string' },
      bookmarkId: { type: 'string' },
    },
  },
};

module.exports = getBookmarkSchema;
