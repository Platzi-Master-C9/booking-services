"use strict";

const { geolocationAdapters } = require("../../adapters");
const { getAddressSchema } = require("./schema");

async function geolocationRouter(fastify) {
  await fastify.get(
    "/address",
    {
      schema: getAddressSchema,
    },
    geolocationAdapters.getAddress
  );
}

module.exports = geolocationRouter;
