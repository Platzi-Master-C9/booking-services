const { placesAdapters } = require('../../adapters');
const { postSchema } = require('./schema');

async function placesRoute(fastify) {
  await fastify.post('/create', { schema: postSchema }, placesAdapters.postPlace);
}

module.exports = placesRoute;
