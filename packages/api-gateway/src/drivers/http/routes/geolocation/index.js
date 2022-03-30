"use strict";

const { geolocationAdapters } = require("../../adapters");
const { getPlaceSchema } = require("./schema");

async function mathRouter(fastify) {
  await fastify.post("/place", { getPlaceSchema }, geolocationAdapters.createPlace);
}

module.exports = mathRouter;
