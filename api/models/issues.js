const mongoose = require('mongoose');

const issuesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String },
    name: { type: String },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, default: false }
});

module.exports = mongoose.model('issues', issuesSchema);



