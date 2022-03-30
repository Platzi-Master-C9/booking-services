"use strict";

const { geolocationAdapters } = require("../../adapters");
const { createPlaceSchema } = require("./schema");

async function geolocationRouter(fastify) {
  await fastify.post(
    "/place",
    { schema: { body: createPlaceSchema } },
    geolocationAdapters.createPlace
  );
}

module.exports = geolocationRouter;
