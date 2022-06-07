const postPlaceSchema = {
  description: 'This is the route to use for creating a new place',
  tags: ['Places'],
  body: {
    type: 'object',
    properties: {
      propertyType: { type: 'string', description: 'property type' },
      amenities: { type: 'array', description: 'amenities' },
      address: {
        type: 'object',
        properties: {
          country: { type: 'string', description: 'Country' },
          state: { type: 'string', description: 'State' },
          city: { type: 'string', description: 'City' },
          zipcode: { type: 'string', description: 'Zipcode' },
          street: { type: 'string', description: 'street' },
          price: { type: 'number', description: 'price' },
        },
        required: [
          'country',
          'state',
          'city',
          'zipcode',
          'street',
          'price',
        ],
      },
      floorPlans: { type: 'array', description: 'floor plans' },
      title: { type: 'string', description: 'place title' },
      description: { type: 'string', description: 'place description' },
      houseRules: { type: 'array', description: 'house rules' },
      healthAndSecurity: { type: 'array', description: 'health and security' },
      price: { type: 'number', description: 'price' },
    },
    required: [
      'propertyType',
      'amenities',
      'address',
      'floorPlans',
      'title',
      'description',
      'houseRules',
      'healthAndSecurity',
      'price',
    ],
  },
};

const getPlacesSchema = {
  description: 'Route for getting all the places',
  tags: ['Places'],
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        total: { type: 'number' },
        places: { type: 'array' },
      },
    },
  },
};

const deletePlaceSchema = {
  description: 'This is the route to use for deleting a place',
  tags: ['Places'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'number' },
    },
    required: ['id'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

module.exports = {
  postPlaceSchema,
  getPlacesSchema,
  deletePlaceSchema,
};
