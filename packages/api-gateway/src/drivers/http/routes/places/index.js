const { placesAdapters } = require('../../adapters');
const { postSchema } = require('./schema');

async function placesRoute(fastify) {
  await fastify.post('/', { schema: postSchema }, placesAdapters.postPlace);
}

module.exports = placesRoute;
