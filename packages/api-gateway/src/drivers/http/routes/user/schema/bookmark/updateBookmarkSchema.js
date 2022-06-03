const updateBookmarkSchema = {
  description: 'Update bookmark',
  tags: ['Users'],
  params: {
    type: 'object',
    required: ['userId', 'bookmarkId'],
    properties: {
      userId: { type: 'string' },
      bookmarkId: { type: 'string' },
    },
  },
  body: {
    type: 'object',
    properties: {
      nameFavoriteList: { type: 'string' },
    },
    required: ['nameFavoriteList'],
  },
};

module.exports = updateBookmarkSchema;
