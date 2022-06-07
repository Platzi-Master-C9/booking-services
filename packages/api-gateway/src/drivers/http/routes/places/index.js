const { placesAdapters } = require('../../adapters');
const { postPlaceSchema, getPlacesSchema, deletePlaceSchema } = require('./schema');

async function placesRoute(fastify) {
  await fastify.post(
    '/',
    {
      schema: postPlaceSchema,
    },
    placesAdapters.postPlace,
  );
  await fastify.get('/', { schema: getPlacesSchema }, placesAdapters.getPlaces);
  await fastify.delete('/:id', { schema: deletePlaceSchema }, placesAdapters.deletePlace);
}

module.exports = placesRoute;
