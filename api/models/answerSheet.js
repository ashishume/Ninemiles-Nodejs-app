const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true },
    testNumber: { type: Number, required: true },
    section: { type: String, required: true },
    marksBand: { type: Number, required: true },
    countOfCorrectAnswers: { type: Number, required: true },
    userType: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('marksSheet', answerSchema);



