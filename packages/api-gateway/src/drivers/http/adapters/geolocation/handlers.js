"use strict";
const geolocationServices = require("../../../../../mocks/geolocationServices.mock");

function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply.send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

async function getPlaces(req, reply) {
  try {
    const { lon, lat, radius } = req.query;

    req.log.info("[http-server]: Getting places: ", { lon, lat, radius });

    //const places = await this.geolocationServices.getPlaces( lon, lat, radius );
    const places = await geolocationServices.mockGetPlaces(lat, lon, radius);

    return reply
      .code(200)
      .header("Content-Type", "application/json; chartset:utf-8")
      .send(places);
  } catch (error) {
    errorHandler(error, reply);
  }
}

module.exports = {
  getPlaces,
};
