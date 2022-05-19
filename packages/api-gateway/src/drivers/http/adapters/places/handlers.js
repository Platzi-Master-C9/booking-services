async function postPlace(req, reply) {
  let placeDescription = '';
  const {
    place_name,
    price_per_night_usd,
    host_id,
    type,
    description,
    perks,
    spaces,
    rules,
  } = req.body;
  if(description){
    placeDescription = description
  }
  req.log.info('[http-server]: posting a place');
  let newPlaceId;
  try {
    const { dataValues: { id }} = await this.placesService.postPlace([{
      place_name,
      price_per_night_usd,
      host_id,
      type,
      description: placeDescription
    }]);
    newPlaceId = id;
    
    const files = await req.files();
    let urlImages = this.placesService.uploadFiles(files);
    
    console.log(urlImages.length)
    if(urlImages.length >= 1){
      let query = [];
      for(let i=0;i<urlImages.length;i++){
        query.push({
          url: urlImages[i],
          place_id: id,
        })
      }
      await this.placesService.postImage(query)
    }

    if(perks.length >= 1){
      let query = perks;
      for(let i=0;i<perks.length;i++){
        query[i].place_id = id;
      }
      await this.placesService.postPerk(query)
    }

    if(rules.length >= 1){
      let query = rules;
      for(let i=0;i<rules.length;i++){
        query[i].place_id = id;
      }
      await this.placesService.postRule(query)
    }

    if(spaces.length >= 1){
      let query = spaces;
      for(let i=0;i<spaces.length;i++){
        query[i].place_id = id;
      }
      await this.placesService.postSpace(query)
    }

  } catch (error) {
    this.placesService.deletePlace(newPlaceId);
    return reply.code(500).send({
      message: 'Could not post Place'
    });
  }

  return reply.code(201)
    .send({ msg: `${place_name} has been saved correctly.` });
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
