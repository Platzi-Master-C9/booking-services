const { places } = require('../src/useCases');
const listPlacesMock = require('../mocks/placesList.mock');

// test example
describe('Given a request for listing places', () => {
  test('When calling  places.listPlaces(listPlacesMock)"', () => {
    expect(places.listPlaces(listPlacesMock)()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          placeName: expect.any(String),
          hostName: expect.any(String),
          status: expect.any(String),
        }),
      ]),
    );
  });
});
