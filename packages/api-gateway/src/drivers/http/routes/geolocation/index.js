"use strict";

const { geolocationAdapters } = require("../../adapters");
const schema = require("./schema");

async function geolocationRouter(fastify) {
  await fastify.get("/near/:lat-:lng/radius/:r", { schema }, geolocationAdapters.getPlaces);
}

module.exports = geolocationRouter;
