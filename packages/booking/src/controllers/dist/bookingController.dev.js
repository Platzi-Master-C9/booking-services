"use strict";

var bookingService = require('../services/bookingServices');

var getAllBookings = function getAllBookings(req, res) {
  var allBookings = bookingService.getAllBookings();
  res.send(allBookings);
};

var getOneBooking = function getOneBooking(req, res) {
  var oneBooking = bookingService.getOneBooking(req.params.id);
  res.send(oneBooking);
};

var createNewBooking = function createNewBooking(req, res) {
  var isCreatedAlready = bookingService.createNewBooking(req.body);
  res.send(isCreatedAlready);
};

var deleteBooking = function deleteBooking(req, res) {
  var isDeleted = bookingService.deleteBooking(req.params.id);
  res.send(isDeleted);
};

module.exports = {
  getAllBookings: getAllBookings,
  getOneBooking: getOneBooking,
  createNewBooking: createNewBooking,
  deleteBooking: deleteBooking
};