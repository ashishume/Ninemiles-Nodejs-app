var request = require('request');


exports.payment = (req, res) => {
    var headers = { 'X-Api-Key': '09c094fe4eac2bf4da6eb19834c0d230', 'X-Auth-Token': '68b6207d4b9336d1553ed60bcd2d5489' }
    var payload = {
        amount: req.body.amount,
        purpose: req.body.purpose,
        buyer_name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        redirect_url: req.body.redirectUrl,
        send_email: true,
        webhook: req.body.webhook,
        send_sms: true,
        allow_repeated_payments: false
    }

    request.post('https://www.instamojo.com/api/1.1/payment-requests/', { form: payload, headers: headers }, function (error, response, body) {
        if (!error && response.statusCode == 201) {
            res.status(201).json({
                message: "Payment Success",
                body
            })
        } else {
            res.status(500).json({
                message: "Payment Failed"
            })

        }
    })

}



