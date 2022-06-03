const { userAdapter } = require('../../adapters');
const {
  createUserSchema,
  validateUserSchema,
  updateUserSchema,
  getUserSchema,
  createBookmarkSchema,
  getBookmarkSchema,
  getBookmarkListSchema,
  updateBookmarkSchema,
} = require('./schema');

async function UserRouter(fastify) {
  // users endpoints
  await fastify.post(
    '/',
    { schema: createUserSchema },
    userAdapter.createUser,
  );
  await fastify.post(
    '/:userId/validate',
    { schema: validateUserSchema },
    userAdapter.validateUser,
  );
  await fastify.put(
    '/:userId/',
    { schema: updateUserSchema },
    userAdapter.updateUser,
  );
  await fastify.delete(
    '/:userId/',
    { schema: getUserSchema },
    userAdapter.deleteUser,
  );

  // bookmark endpoints
  await fastify.post(
    '/:userId/bookmark',
    { schema: createBookmarkSchema },
    userAdapter.createBookmark,
  );
  await fastify.get(
    '/:userId/bookmark/:bookmarkId',
    { schema: getBookmarkSchema },
    userAdapter.getBookmark,
  );
  await fastify.get(
    '/:userId/bookmarks',
    { schema: getBookmarkListSchema },
    userAdapter.getBookmarkList,
  );
  await fastify.put(
    '/:userId/bookmark/:bookmarId',
    { schema: updateBookmarkSchema },
    userAdapter.updateBookmark,
  );
}

module.exports = UserRouter;
