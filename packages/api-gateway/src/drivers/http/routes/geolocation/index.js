const { geolocationAdapters } = require('../../adapters');

const { createPlaceSchema, getPlacesSchema, getAddressSchema updatePlaceSchema } = require('./schema');

async function geolocationRouter(fastify) {
  await fastify.post(
    '/place',
    {
      schema: createPlaceSchema,
    },
    geolocationAdapters.createPlace,
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
  
  await fastify.patch(
    '/place',
    {
      schema: updatePlaceSchema,
    },
    geolocationAdapters.updatePlace,
  );
}

module.exports = geolocationRouter;
