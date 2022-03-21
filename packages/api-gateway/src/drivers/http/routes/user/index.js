const { userAdapter } = require('../../adapters');
const schema = require('./schema');

async function createUserRouter(fastify) {
	await fastify.post('/', { schema }, userAdapter.createUser);
}

module.exports = createUserRouter;