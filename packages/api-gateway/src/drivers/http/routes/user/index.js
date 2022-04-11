const { userAdapter } = require('../../adapters');
const { createUserSchema } = require('./schema');

async function createUserRouter(fastify) {
  await fastify.post('/', { createUserSchema }, userAdapter.createUser);
}

module.exports = createUserRouter;
