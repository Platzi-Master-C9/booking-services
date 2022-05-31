const createBookmarkSchema = {
  description: 'Create new bookmark',
  tags: ['Users'],
  params: {
    type: 'object',
    required: ['userId'],
    properties: {
      userId: { type: 'string' },
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

module.exports = createBookmarkSchema;
