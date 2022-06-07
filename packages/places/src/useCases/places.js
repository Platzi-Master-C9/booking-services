const boom = require('@hapi/boom');

const createPlace = (createPlaceQuery, createPlaceGeolocation) => async (
    amenities,
    address,
    floorPlans,
    title,
    description,
    houseRules,
    healthAndSecurity,
    price,
) => {
    const resultPlaces = await createPlaceQuery({
        amenities,
        floorPlans,
        title,
        description,
        houseRules,
        healthAndSecurity,
        price,
        created_at: Date().toString(),
        updated_at: Date().toString(),
        deleted_at: null,
    });
    if (!resultPlaces.insertedId) {
        throw boom.notFound('[places:createPlace]: No place inserted:');
    }
    const resultGeolocation = await createPlaceGeolocation({
        ...address,
        place_db_id: resultPlaces.insertedId.toString(),
    });
    if (!resultGeolocation.insertedId) {
        throw boom.notFound('[geolocation:createPlace]: No place inserted:');
    }
    return resultPlaces;
};

module.exports = {
    createPlace,
};
