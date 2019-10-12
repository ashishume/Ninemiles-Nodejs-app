const TestModel = require('../models/tests');
const mongoose = require('mongoose');
const AnswerSheetModel = require('./../models/answerSheet')

exports.display_tests = (req, res) => {
    TestModel
        .find({ email: req.query.email, status: 1 }, { createdAt: 0, status: 0, __v: 0 })
        .exec()
        .then(result => {
            if (result.length > 0) return res.status(200).json(result[0]);
            else
                return res.status(204).json({
                    message: 'No tests found'
                });
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}

exports.insert_tests = (req, res) => {
    TestModel.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(200).json({
                    message: 'User exists',
                });
            } else {
                let tempArray = [];
                for (let i = 1; i <= 32; i++) {
                    if (i == 1 || i == 2) {
                        tempArray.push(
                            {
                                testNumber: i,
                                testPricingStatus: false,
                                listening: false,
                                speaking: false,
                                writing: false,
                                reading: false,
                                onlineWriting: false
                            }
                        )
                    } else {
                        tempArray.push({
                            testNumber: i,
                            testPricingStatus: true,
                            listening: false,
                            speaking: false,
                            writing: false,
                            reading: false,
                            onlineWriting: false
                        }
                        )
                    }
                }
                const present_date = new Date();
                const tests = new TestModel({
                    _id: new mongoose.Types.ObjectId(),
                    testDetails: tempArray,
                    createdAt: present_date,
                    email: req.body.email,
                    status: 1
                });

                tests
                    .save()
                    .then(result => {
                        return res.status(200).json({
                            message: 'Test Added Successfully',
                            object: result
                        });
                    })
                    .catch(err => {
                        return res.status(500).json({
                            error: err
                        });
                    });

            }
        })
}

exports.update_tests = (req, res) => {

    TestModel.update({ email: req.body.email, "testDetails.testNumber": req.body.testNumber }, {
        $set: { [`testDetails.$.${req.body.testStatusUpdate}`]: true }
    }, { new: true }
    ).then(data => {
        if (!data) {
            return res.status(404).json({
                message: "No data found"
            })
        } else {
            return res.status(200).json({
                message: "Status updated"
            })
        }
    })
        .catch(error => {
            return res.status(500).json({
                message: "Something went wrong",
                error: error
            })
        })

}
exports.change_test_status = (req, res) => {

    TestModel.update({ email: req.body.email, "testDetails.testNumber": req.body.testNumber }, {
        $set: { [`testDetails.$.${req.body.testStatusUpdate}`]: false }
    }, { new: true }
    ).then(data => {

        AnswerSheetModel.remove({
            email: req.body.email,
            testNumber: req.body.testNumber,
            section: req.body.testStatusUpdate
        })
            .exec()
            .then(deleteData => {
            })

        if (!data) {
            return res.status(404).json({
                message: "No data found"
            })
        } else {
            return res.status(200).json({
                message: "Status updated"
            })
        }
    })
        .catch(error => {
            return res.status(500).json({
                message: "Something went wrong",
                error: error
            })
        })

}