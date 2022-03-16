async function getPlaces(req, reply) {
  const { lon, lat, radius } = req.query;

  req.log.info("[http-server]: Getting places: ", { lon, lat, radius });

  //const places = await this.geolocationServices.getPlaces({ lon, lat });
  const places = [
    {
      placeId: "4f7df24s43",
      placeName: "New loft Parque 1",
      lat: 45.12346,
      lon: 47.35332,
    },
    {
      placeId: "09d8fwdf2",
      placeName: "New loft Parque 2",
      lat: 31.89201,
      lon: 32.16765,
    },
    {
      placeId: "98asd791d",
      placeName: "New loft Parque 3",
      lat: 11.54765,
      lon: 12.56736,
    },
  ];

  if (!places) {
    return reply
      .code(404)
      .header("Content-Type", "application/json; chartset:utf-8")
      .send({ message: "Cannot set places" });
    //throw new Error('Error to get places!');
  }

  return reply
    .code(200)
    .header("Content-Type", "application/json; chartset:utf-8")
    .send(places);
}

module.exports = {
  getPlaces,
};
