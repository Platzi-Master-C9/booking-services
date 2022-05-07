/*
Here we are testing the dbWritter method with an entity that in this case
is the Places entity
*/
const { faker } = require('@faker-js/faker');

const dbWritter = require('../../../src/useCases/dbManagement/dbWriter');
const { PlaceModelMock } = require('../domains/MockDataSchema');

const postPlace = dbWritter(PlaceModelMock);

const newPlaceInfo = {
    place_name: faker.name.firstName(),
    price_per_night_usd: faker.finance.amount(1, 1000),
    host_id: faker.datatype.number({ min: 1, max: 100 }),
    type: 'casa',
};

describe('Given a client that wants to save a new place', () => {
    //the succesful
    describe('When the client posts the new place info', () => {
        test('Then the postPlace method must write it on the db', async () => {
            const dataValues = await postPlace(newPlaceInfo);
            expect(dataValues.is_active).toBe(true);
        });
    });

    //the error
    describe('When the client does not send the required data', () => {
        test('Then the postPlace method must not write the new row', () => {
            expect(postPlace({
                host_id: newPlaceInfo.host_id,
                place_name: newPlaceInfo.place_name,
            })).rejects.toThrow();
        });
    });
});
