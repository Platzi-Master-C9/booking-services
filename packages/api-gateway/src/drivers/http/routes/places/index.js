const { placesAdapters } = require('../../adapters');
const { postPlaceSchema, getPlacesSchema } = require('./schema');

async function placesRoute(fastify) {
  await fastify.post('/', { schema: postPlaceSchema }, placesAdapters.postPlace);
  await fastify.get('/', { schema: getPlacesSchema }, placesAdapters.getPlaces);
}

module.exports = placesRoute;
