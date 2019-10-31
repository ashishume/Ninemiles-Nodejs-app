const mongoose = require('mongoose');

const onlineWritingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    onlineAnswer: { type: String, required: true },
    question: { type: String, required: true },
    studentEmail: { type: String, required: true },
    studentName: { type: String, required: true },
    testNumber: { type: Number, required: true },
    userType: { type: String, required: true },
    answerIsChecked: { type: Boolean, default: false },
    marksScored: { type: Number },
    sheetNumber: { type: Number },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('onlineWriting', onlineWritingSchema);



