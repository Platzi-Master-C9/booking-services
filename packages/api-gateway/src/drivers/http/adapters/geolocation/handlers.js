async function getAddress(req, reply) {
  const { lon, lat } = req.query;

  req.log.info("[http-server]: Getting places: ", { lon, lat });

  //const places = await this.geolocationServices.getAddress({ lon, lat });
  const address = {
    address: {
      placeName: "New loft Parque",
      placeAddress: "1600 Amphitheatre Parkway, Mountain View, CA",
    },
  };

  if (!address) {
    return reply
      .code(404)
      .header("Content-Type", "application/json; chartset:utf-8")
      .send({ message: "Cannot get adddress" });
    //throw new Error('Error to get address!');
  }

  return reply
    .code(200)
    .header("Content-Type", "application/json; chartset:utf-8")
    .send(address);
}

module.exports = {
  getAddress,
};
