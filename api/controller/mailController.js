'use strict';
const nodemailer = require('nodemailer');


exports.send_mail = (req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ninemilesmocks@gmail.com',
            pass: 'Ninemiles1@'
        }
    });

    const mailOptions = {
        from: 'ninemilesmocks@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        html: req.body.htmlCode
    };


    transporter.sendMail(mailOptions, function (err, info) {

        if (err) {
            return res.status(500).json({
                message: "Something went wrong"
            })
        }
        else {
            return res.status(200).json({
                message: "Mail sent successfully",
                info
            })
        }
    });
}


