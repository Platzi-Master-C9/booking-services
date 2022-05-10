const { bookings } = require('../src/useCases');
const listBookingsMock = require('../mocks/bookingsList.mock');

// test example
describe('Given a request for listing bookings', () => {
  test('When calling  bookings.listPlaces(listBookingsMock)"', () => {
    expect(bookings.listBookings(listBookingsMock)()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          dateOfBook: expect.any(String),
          placeName: expect.any(String),
          userName: expect.any(String),
          status: expect.any(String),
          fromDate: expect.any(String),
          endDate: expect.any(String),
        }),
      ]),
    );
  });
});
