const dbDeleter = require('../../../src/useCases/dbManagement/dbDeleter');
const { PlaceModelMock } = require('../domains/MockDataSchema');

const deletePlace = dbDeleter(PlaceModelMock);

describe('Given a host who wants to delete a place', () => {
    //The happy test
    describe('When the client sends the DELETE petition with the id', () => {
        test('Then the method must confirm', async () => {
            const isDeleted = await deletePlace(71);
            expect(isDeleted).toBe(true);
        });
    });
    //the sad tests
    describe('When the client does  not send the id', () => {
        test('Then the deletePlace method must throw an error', () => {
            expect(deletePlace(undefined)).rejects.toThrow();
        });
    });
    describe('When the client does  sends an unexisting id', () => {
        test('Then the deletePlace method must throw an error', () => {
            expect(deletePlace(1000)).rejects.toThrow();
        });
    });
});
