"use strict";

var express = require('express');

var v1BookingRouter = require('./v1/routes/bookingRoutes');

var app = express();
var PORT = process.env.PORT || 3000;
app.use('/v1/booking', v1BookingRouter);
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});