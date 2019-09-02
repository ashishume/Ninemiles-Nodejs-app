const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    testDetails: [
        {
            testNumber: { type: Number },
            testPricingStatus: { type: Boolean },
            listening: { type: Boolean },
            speaking: { type: Boolean },
            writing: { type: Boolean },
            reading: { type: Boolean }
        }
    ],
    email: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: Number, default: 1 }
});

module.exports = mongoose.model('test', testSchema);



