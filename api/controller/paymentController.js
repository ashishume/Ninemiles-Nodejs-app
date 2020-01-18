var request = require('request');
// var FormData = require('form-data');

let BASE_URL = 'https://api.cashfree.com/api/v1/';
let appId = '22744b4edf53a1d7ddf3b717d44722';
let secretKey = 'c8dbb55dab0da9a7106dbebfcba85a380a88c7ee'
exports.payment = (req, res) => {
    var orderNote = "Nine Miles Premium Access for " + req.body.name;

    let returnUrl = req.body.returnUrl + '?paymentStatus=true';
    const form = {
        'appId': appId,
        'secretKey': secretKey,
        'orderId': req.body.orderId,
        'orderAmount': req.body.amount,
        'orderCurrency': 'INR',
        'orderNote': orderNote,
        'customerEmail': req.body.email,
        'customerPhone': req.body.phone,
        'returnUrl': returnUrl
    }

    let url = BASE_URL + 'order/create';

    request.post({ url: url, formData: form }, function (error, response, body) {

        if (response.statusCode == 200) {
            res.status(201).json(JSON.parse(body))
        }
        if (response.statusCode == 400) {
            res.status(400).json({
                message: "You have already made the payment"
            })
        }
    })
}
exports.showPayment = (req, res) => {
    const form = {
        'appId': appId,
        'secretKey': secretKey,
        'orderId': req.body.orderId
    }

    let url = BASE_URL + 'order/info/status';

    request.post({ url: url, formData: form }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.status(201).json({
                body: JSON.parse(body)
            })
        }
    })
}


//INSTAMOJO PAYMENT
// exports.payment = (req, res) => {
//     var headers = { 'X-Api-Key': '09c094fe4eac2bf4da6eb19834c0d230', 'X-Auth-Token': '68b6207d4b9336d1553ed60bcd2d5489' }
//     var payload = {
//         amount: req.body.amount,
//         purpose: req.body.purpose,
//         buyer_name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         redirect_url: req.body.redirectUrl,
//         send_email: true,
//         webhook: req.body.webhook,
//         send_sms: true,
//         allow_repeated_payments: false
//     }

//     request.post('https://www.instamojo.com/api/1.1/payment-requests/', { form: payload, headers: headers }, function (error, response, body) {
//         if (!error && response.statusCode == 201) {
//             res.status(201).json({
//                 message: "Payment Success",
//                 body
//             })
//         } else {
//             res.status(500).json({
//                 message: "Payment Failed"
//             })

//         }
//     })

// }



