const listBookings = (bookings) => (dateOfBook, status, placeName, userName) => {
  let listBookingsMock = bookings;

  if (dateOfBook) {
    listBookingsMock = listBookingsMock.filter((booking) => booking.dateOfBook === dateOfBook);
  }

  if (status) {
    listBookingsMock = listBookingsMock.filter((booking) => booking.status === status);
  }

  if (placeName) {
    listBookingsMock = listBookingsMock
      .filter(
        (booking) => booking.placeName.search(placeName) >= 0,
      );
  }

  if (userName) {
    listBookingsMock = listBookingsMock.filter((booking) => booking.userName.search(userName) >= 0);
  }

  return listBookingsMock;
};

module.exports = {
  listBookings,
};
