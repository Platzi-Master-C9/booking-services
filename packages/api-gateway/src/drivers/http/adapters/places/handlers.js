function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply
      .code(error.output.payload.statusCode)
      .send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

async function postPlace(req, reply) {
  try {
    const {
      amenities,
      address,
      floorPlans,
      title,
      description,
      houseRules,
      healthAndSecurity,
      price,
    } = req.body;
    req.log.info('[http-server]: posting a place');
    const result = await this.placesService.createPlace(
      amenities,
      address,
      floorPlans,
      title,
      description,
      houseRules,
      healthAndSecurity,
      price,
    );
    return reply.code(201)
      .send({ response: result });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

async function getPlaces(req, reply) {
  req.log.info('[http-server]: reading places');

  let places;
  try {
    places = await this.placesService.getPlaces();
  } catch (error) {
    return reply.code(500).send({
      message: 'Could not get places',
    });
  }

  return reply.code(200).send({
    total: places.length,
    places,
  });
}

async function deletePlace(req, reply) {
  const { id } = req.params;

  req.log.info('[http-server]: deleting a place');

  try {
    await this.placesService.deletePlace(id);
  } catch (error) {
    return reply.code(404)
      .send({
        message: 'Incorrect id',
      });
  }

  return reply.code(200)
    .send({
      message: `The place with the id ${id} has been deleted correctly.`,
    });
}

module.exports = {
  postPlace,
  getPlaces,
  deletePlace,
};
