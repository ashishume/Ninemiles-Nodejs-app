const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number },
    userType: { type: String },
    profileImageUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    paymentStatus: { type: Boolean, default: 0 },
    status: { type: Number, default: 1 }
});

module.exports = mongoose.model('user', userSchema);


// 1 ==> Teacher
// 2 ==> General Student
// 4 ==> Academic Student

