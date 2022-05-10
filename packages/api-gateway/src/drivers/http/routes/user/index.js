const { userAdapter } = require('../../adapters');
const { createUserSchema, validateUserSchema } = require('./schema');

async function UserRouter(fastify) {
  await fastify.post('/', { schema: createUserSchema }, userAdapter.createUser);
  await fastify.post('/:userId/validate', { schema: validateUserSchema }, userAdapter.validateUser);
}

module.exports = UserRouter;
