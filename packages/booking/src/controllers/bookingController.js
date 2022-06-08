const bookingService = require('../services/bookingServices');

const getAllBookings = (req, res) => {
  const allBookings = bookingService.getAllBookings();
  res.send(allBookings);
};

const getOneBooking = (req, res) => {
  const oneBooking = bookingService.getOneBooking(req.params.id);
  res.send(oneBooking);
};

const createNewBooking = (req, res) => {
  const isCreatedAlready = bookingService.createNewBooking(req.body);
  res.send(isCreatedAlready);
};

const deleteBooking = (req, res) => {
  const isDeleted = bookingService.deleteBooking(req.params.id);
  res.send(isDeleted);
};

module.exports = {
  getAllBookings,
  getOneBooking,
  createNewBooking,
  deleteBooking
};