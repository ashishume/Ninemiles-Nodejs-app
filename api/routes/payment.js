const express = require('express');
const router = express.Router();
const payment = require('../controller/paymentController');


router.post('/makePayment', payment.payment)
router.post('/showPayment', payment.showPayment)

module.exports = router;
