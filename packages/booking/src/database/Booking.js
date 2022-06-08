const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllBookings = () => {
  return DB.bookings;
};

const getBookingById = (id) => {
  const booking = DB.bookings.find((booking) => {
    if (booking.id === id) {
      return booking;
    } else {
      return;
    }
  });
  return booking;
};

const createNewBooking = (newBooking) => {
  const isCreatedAlready =
    DB.bookings.findIndex((booking) => {
      booking.name === newBooking.name;
    }) > -1;
  if (isCreatedAlready) {
    return;
  }
  DB.bookings.push(newBooking);
  saveToDatabase(DB);
  return newBooking;
};

const deleteBooking = (id) => {
  const index = DB.bookings.findIndex((booking) => {
    if (booking.id === id) {
      return booking;
    } else {
      return;
    }
  });
  if (index === -1) {
    return;
  }
  DB.bookings.splice(index, 1);
  saveToDatabase(DB);
}

module.exports = {getAllBookings, getBookingById, createNewBooking, deleteBooking};
