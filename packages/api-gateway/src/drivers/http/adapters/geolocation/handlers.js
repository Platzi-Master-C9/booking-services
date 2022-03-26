function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply.send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

async function getAddress(req, reply) {
  try {
    const { lon, lat } = req.query;

    req.log.info("[http-server]: Getting address with reverse geocoding: ", { lon, lat });

    //const places = await this.geolocationServices.getAddress( lon, lat );
    const address = {
      address: {
        country: "Botswana",
        state: "North Carolina",
        city: "South Ray",
        postcode: "29084",
        streetAddress: "018 Maximillian Mission",
      },
    };

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
