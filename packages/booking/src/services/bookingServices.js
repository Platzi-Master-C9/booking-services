const Booking = require("../database/Booking");


const getAllBookings = () => {
  const allBookings = Booking.getAllBookings();
  return allBookings;
};

const getOneBooking = (id) => {
  const oneBooking = Booking.getBookingById(id);
  return oneBooking;
}
const createNewBooking = (newBooking) => {
  const isCreatedAlready = Booking.createNewBooking(newBooking);
  return isCreatedAlready;
}

const deleteBooking = (id) => {
  const isDeleted = Booking.deleteBooking(id);
  return isDeleted;
}

module.exports = {
  getAllBookings,
  getOneBooking,
  createNewBooking,
  deleteBooking
}