const mongoose = require('mongoose');

const writingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    submittedAnswer: [{ answer: { type: String }, section: { type: String, required: true }, question: { type: String, required: true } }],
    studentEmail: { type: String, required: true },
    studentName: { type: String, required: true },
    sectionCategory: { type: String },
    testNumber: { type: Number, required: true },
    userType: { type: String, required: true },
    checkStatus: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('writingAnswer', writingSchema);



