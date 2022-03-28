"use strict";

const { geolocationAdapters } = require("../../adapters");
const { getPlacesSchema } = require("./schema");

async function geolocationRouter(fastify) {
  await fastify.get(
    "/places",
    {
      schema: { getPlacesSchema },
    },
    geolocationAdapters.getPlaces
  );
}

module.exports = geolocationRouter;
