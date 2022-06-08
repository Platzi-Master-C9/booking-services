"use strict";

var Booking = require("../database/Booking");

var getAllBookings = function getAllBookings() {
  var allBookings = Booking.getAllBookings();
  return allBookings;
};

var getOneBooking = function getOneBooking(id) {
  var oneBooking = Booking.getBookingById(id);
  return oneBooking;
};

var createNewBooking = function createNewBooking(newBooking) {
  var isCreatedAlready = Booking.createNewBooking(newBooking);
  return isCreatedAlready;
};

var deleteBooking = function deleteBooking(id) {
  var isDeleted = Booking.deleteBooking(id);
  return isDeleted;
};

module.exports = {
  getAllBookings: getAllBookings,
  getOneBooking: getOneBooking,
  createNewBooking: createNewBooking,
  deleteBooking: deleteBooking
};