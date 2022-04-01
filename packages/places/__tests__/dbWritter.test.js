const { postPlace } = require('../src/index');

const newPlaceInfo = {
    place_name: 'Mi nueva casa',
    price_per_night_usd: 15,
    host_id: 1
};

describe('Given a client that wants to save a new place', () => {
    describe('When the client posts the new place info', () => {
        test('Then the postPlace method must write it on the db', async () => {
            const { dataValues } = await postPlace(newPlaceInfo);
            expect(dataValues.is_active).toBe(true);
        });
    });
});
