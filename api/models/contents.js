const mongoose = require('mongoose');

const contentsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    paragraphTitle: { type: String, required: true },
    paragraphHeading: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    author: { type: String, required: true },
    section: { type: Number, required: true },
    testNumber: { type: Number, required: true },
    paragraphUserType: { type: String, required: true },
    paragraphSectionCategory: { type: String },
    status: { type: Number, default: 1 }
});

module.exports = mongoose.model('content', contentsSchema);



