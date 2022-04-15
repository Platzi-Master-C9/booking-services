const { geolocationAdapters } = require('../../adapters');
const { getPlacesSchema, getAddressSchema, deletePlaceSchema } = require('./schema');

async function geolocationRouter(fastify) {
  await fastify.get(
    '/places',
    {
      schema: getPlacesSchema,
    },
    geolocationAdapters.getPlaces,
  );

  await fastify.get(
    '/address',
    {
      schema: getAddressSchema,
    },
    geolocationAdapters.getAddress,
  );

  await fastify.delete(
    '/place',
    {
      schema: deletePlaceSchema,
    },
    geolocationAdapters.deletePlace,
  );
}

module.exports = geolocationRouter;
