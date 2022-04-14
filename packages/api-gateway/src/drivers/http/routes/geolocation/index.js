const { geolocationAdapters } = require('../../adapters');
const { updatePlaceSchema, getPlacesSchema, getAddressSchema } = require('./schema');

async function geolocationRouter(fastify) {
  await fastify.patch(
    '/place',
    {
      schema: updatePlaceSchema,
    },
    geolocationAdapters.updatePlace,
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
