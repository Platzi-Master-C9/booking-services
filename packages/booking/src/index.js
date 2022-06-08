
const express = require('express');

const v1BookingRouter = require('./v1/routes/bookingRoutes');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use('/v1/booking', v1BookingRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});