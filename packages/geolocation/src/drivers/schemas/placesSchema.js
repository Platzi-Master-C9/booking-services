// Schema for collection places
const placesSchema = {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'location',
        'country',
        'state',
        'city',
        'zipcode',
        'street_address',
        'place_db_id',
      ],
      properties: {
        location: {
          bsonType: 'object',
          required: ['type', 'coordinates'],
          properties: {
            type: { bsonType: 'string' },
            coordinates: {
              bsonType: ['array'],
              minItems: 2,
              maxItems: 2,
              items: [
                {
                  bsonType: 'double',
                  minimum: -180,
                  maximum: 180,
                },
                {
                  bsonType: 'double',
                  minimum: -180,
                  maximum: 180,
                },
              ],
            },
          },
          description: 'longitude and latitude of the place',
        },
        country: {
          bsonType: 'string',
          description: 'country of the place, must be a string and is required',
        },
        state: {
          bsonType: 'string',
          description: 'state of the place, must be a string and is required',
        },
        city: {
          bsonType: 'string',
          description: 'city of the place, must be a string and is required',
        },
        zipcode: {
          bsonType: 'string',
          description: 'place zipcode, must be a string and is required',
        },
        street_address: {
          bsonType: 'string',
          description: 'place addres, must be a string and is required',
        },
        price: {
          bsonType: 'double',
          description: 'place price',
        },
        place_db_id: {
          bsonType: 'string',
          description:
            'place id from the places services DB, must be a string and is required',
        },
        created_at: {
          bsonType: 'date',
          description:
            'date when was created the place, must be a date and is required',
        },
        updated_at: {
          bsonType: 'date',
          description:
            'date when was updated the place, must be a date and is required',
        },
        deleted_at: {
          bsonType: ['date', 'null'],
          description:
            'date when was deleted the place, must be a date and is not required',
        },
      },
    },
  },
};

module.exports = placesSchema;
