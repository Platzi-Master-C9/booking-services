function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply.send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

async function getAddress(req, reply) {
  try {
    const { lon, lat } = req.query;

    req.log.info("[http-server]: Getting places: ", { lon, lat });

    //const places = await this.geolocationServices.getAddress( lon, lat );
    const address = {
      address: {
        placeName: "New loft Parque",
        placeAddress: "1600 Amphitheatre Parkway, Mountain View, CA",
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
