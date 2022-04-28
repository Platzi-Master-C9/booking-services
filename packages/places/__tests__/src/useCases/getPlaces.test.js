const getPlaces = require('../../../src/useCases/dbManagement/getPlaces');
const { PlaceModelMock } = require('../domains/MockDataSchema');

const getPlacesMock = getPlaces(PlaceModelMock);

describe('given a client that tries to get the places', () => {
    describe('when the client does the GET request', () => {
        test('then the db returns an array with the places', async () => {
            const data = await getPlacesMock();
            expect(typeof data).toBe('object');
        });
    });
});
