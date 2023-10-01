const { createPayment, getAllPayments, getPaymentByPaymentId } = require("../Controllers/payment.controller");



module.exports = function(app){
    app.post("/mba/api/v1/payments",[],createPayment);
    app.get("/mba/api/v1/payments",[],getAllPayments);
    app.get("/mba/api/v1/payments/:id",[],getPaymentByPaymentId);
}