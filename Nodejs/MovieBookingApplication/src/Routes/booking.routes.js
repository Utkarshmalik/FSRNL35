const { createBooking, getAllBookings, getBookingById, updateBooking, cancelBooking } = require("../Controllers/booking.controller");
const { verifyToken } = require("../Middlewares/authJWT");



module.exports =  function(app){
    app.post("/mba/api/v1/bookings",[verifyToken],createBooking);
    app.get("/mba/api/v1/bookings",[verifyToken],getAllBookings);
    app.get("/mba/api/v1/bookings/:id",[verifyToken],getBookingById);
    app.put("/mba/api/v1/bookings/:id",[verifyToken],updateBooking);
    app.put("/mba/api/v1/bookings/:id/cancel",[verifyToken],cancelBooking);
}