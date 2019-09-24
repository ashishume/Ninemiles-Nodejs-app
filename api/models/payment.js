const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String },
    name: { type: String },
    amount: { type: Number },
    paymentId: { type: String },
    phone: { type: String },
    paymentStatus: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('payment', paymentSchema);




// allow_repeated_payments: false
// amount: "10.00"
// buyer_name: "Ashish Debnath"
// created_at: "2019-09-24T08:38:45.729570Z"
// customer_id: null
// email: "ashishume1997@gmail.com"
// email_status: "Pending"
// expires_at: null
// id: "a763d75993024258b50cce3bba57fc7f"
// longurl: "https://www.instamojo.com/@ninemilesielts/a763d75993024258b50cce3bba57fc7f"
// modified_at: "2019-09-24T08:38:45.729588Z"
// phone: "+918557098095"
// purpose: "Ninemiles Premium Service"
// redirect_url: "https://upwork-5d46d.firebaseapp.com"
// send_email: true
// send_sms: true
// shorturl: null
// sms_status: "Pending"
// status: "Pending"
// webhook: "https://upwork-5d46d.firebaseapp.com"


