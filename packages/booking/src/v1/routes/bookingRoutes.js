const express = require('express');
const router = express.Router();
const bookingController = require('../../controllers/bookingController');

router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getOneBooking);
router.post('/', bookingController.createNewBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;