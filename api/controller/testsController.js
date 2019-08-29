const TestModel = require('../models/tests');
const mongoose = require('mongoose');


exports.display_tests = (req, res) => {
    TestModel
        .find({ email:req.query.email,status: 1 }, { createdAt: 0, status: 0, __v: 0 })
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
                const present_date = new Date();
                const tests = new TestModel({
                    _id: new mongoose.Types.ObjectId(),
                    testDetails: req.body.testDetails,
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
    TestModel
        .findOneAndUpdate(
            { email: req.body.email },
            { $push: { testDetails: req.body.testDetails } },
            { new: true }
        )
        .then(result => {
            if (!result) {
                return res.status(404).json({
                    message: 'User Does not exist',
                    error: err
                });
            } else {
                return res.status(200).json({
                    message: 'Test Updated Successfully',
                    object: result
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}