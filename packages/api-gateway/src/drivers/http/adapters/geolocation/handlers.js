"use strict";
const geolocationServices = require("../../../../../mocks/geolocationServices.mock");

function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply.send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

async function getAddress(req, reply) {
  try {
    const { lon, lat } = req.query;

    req.log.info("[http-server]: Getting address with reverse geocoding: ", {
      lon,
      lat,
    });

    //const address = await this.geocolocationServices.getAddress(lat, lon);
    const address = await geolocationServices.mockGetAddress(lat, lon);

    return reply
      .code(200)
      .header("Content-Type", "application/json; chartset:utf-8")
      .send(address);
  } catch (error) {
    errorHandler(error, reply);
  }
}

module.exports = {
  getAddress,
};
