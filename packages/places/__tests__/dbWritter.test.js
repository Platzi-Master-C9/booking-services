jest.mock('winston', () => ({
    createLogger: () => ({
        info: jest.fn(),
        error: jest.fn(),
        warn: jest.fn(),
        debug: jest.fn(),
    }),
    transports: {
        Console: jest.fn(),
    },
    format: {
        json: jest.fn(),
    },
}));

/*
Here we are testing the dbWritter method with an entity that in this case
is the Places entity
*/

const { postPlace } = require('../src/index');

const newPlaceInfo = {
    place_name: 'Mi nueva casa',
    price_per_night_usd: 15,
    host_id: 1,
    type: 'casa'
};

describe('Given a client that wants to save a new place', () => {
    //the succesful
    describe('When the client posts the new place info', () => {
        test('Then the postPlace method must write it on the db', async () => {
            const { dataValues } = await postPlace(newPlaceInfo);
            expect(dataValues.is_active).toBe(true);
        });
    });

    //the error
    describe('When the client does not send the required data', () => {
        test('Then the postPlace method must not write the new row', () => {
            expect(postPlace({
                host_id: newPlaceInfo.host_id,
                place_name: newPlaceInfo.place_name
            })).rejects.toThrow();
        });
    });
});
