const { geolocationAdapters } = require('../../adapters');
const { getPlacesSchema, getAddressSchema } = require('./schema');

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
}

module.exports = geolocationRouter;
