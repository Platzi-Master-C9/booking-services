"use strict";

var express = require('express');

var router = express.Router();

var bookingController = require('../../controllers/bookingController');

router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getOneBooking);
router.post('/', bookingController.createNewBooking);
router["delete"]('/:id', bookingController.deleteBooking);
module.exports = router;