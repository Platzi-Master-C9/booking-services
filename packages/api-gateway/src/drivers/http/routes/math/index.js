const { mathAdapters } = require('../../adapters');
const schema = require('./schema');

async function mathRouter(fastify) {
  await fastify.post('/', { schema }, mathAdapters.createSum);
}

module.exports = mathRouter;
