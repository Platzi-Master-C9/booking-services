const { geolocationAdapters } = require('../../adapters');
const { getPlacesSchema, getAddressSchema, getPlaceSchema } = require('./schema');

async function geolocationRouter(fastify) {
  await fastify.get(
    '/place',
    {
      schema: getPlaceSchema,
    },
    geolocationAdapters.getPlace,
  );

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
}

module.exports = geolocationRouter;
