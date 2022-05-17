const { userAdapter } = require('../../adapters');
const {
  createUserSchema, validateUserSchema, updateUserSchema, getUserSchema,
} = require('./schema');

async function UserRouter(fastify) {
  await fastify.post('/', { schema: createUserSchema }, userAdapter.createUser);
  await fastify.post('/:userId/validate', { schema: validateUserSchema }, userAdapter.validateUser);
  await fastify.put('/:userId/', { schema: updateUserSchema }, userAdapter.updateUser);
  await fastify.delete('/:userId/', { schema: getUserSchema }, userAdapter.deleteUser);
}

module.exports = UserRouter;
