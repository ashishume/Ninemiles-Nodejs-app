
const mongoose = require('mongoose');
const WritingAnswerModel = require('../models/writingSectionAnswer');
const OnlineWritingAnswerModel = require('../models/onlineUpload');

//WRITING SECTION
exports.insert_writing_answer = (req, res) => {
    const present_date = new Date();
    const writing = new WritingAnswerModel({
        _id: new mongoose.Types.ObjectId(),
        submittedAnswer: req.body.submittedAnswer,
        studentEmail: req.body.studentEmail,
        studentName: req.body.studentName,
        sectionCategory: req.body.sectionCategory,
        createdAt: present_date,
        testNumber: req.body.testNumber,
        userType: req.body.userType,
        checkStatus: 0,
    });

    writing
        .save()
        .then(result => {
            if (result) {
                return res.status(200).json({
                    message: 'Answer submitted Successfully',
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}




exports.display_writing_answer = (req, res) => {

    WritingAnswerModel.find({}, { __v: 0 })
        .exec()
        .then(docs => {
            if (docs.length > 0) return res.status(200).json(docs);
            else
                return res.status(204).json({
                    message: 'No entries Found'
                });
        })
        .catch(error => {
            res.status(500).json({
                error: err
            });
        });
}





//ONLINE UPLOAD WRITING SECTION
exports.insert_online_writing_answer = (req, res) => {
    const present_date = new Date();
    const writing = new OnlineWritingAnswerModel({
        _id: new mongoose.Types.ObjectId(),
        onlineAnswer: req.body.onlineAnswer,
        studentEmail: req.body.studentEmail,
        studentName: req.body.studentName,
        testNumber: req.body.testNumber,
        userType: req.body.userType,
        answerIsChecked: false,
        marksScored: 0,
        sheetNumber: req.body.sheetNumber,
        createdAt: present_date,
    });
    OnlineWritingAnswerModel.find({
        testNumber: req.body.testNumber,
        sheetNumber: req.body.sheetNumber
    })
        .exec()
        .then(sheetData => {
            if (sheetData.length >= 1) {
                return res.status(409).json({
                    message: "Sheet Number already exists"
                })
            } else {
                writing
                    .save()
                    .then(result => {
                        if (result) {
                            return res.status(200).json({
                                message: 'Answer submitted Successfully',
                            });
                        }
                    })
                    .catch(err => {
                        return res.status(500).json({
                            error: err
                        });
                    });
            }
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}



exports.display_online_writing_answer = (req, res) => {

    OnlineWritingAnswerModel.find({}, { __v: 0 })
        .exec()
        .then(docs => {
            if (docs.length > 0) return res.status(200).json(docs);
            else
                return res.status(204).json({
                    message: 'No entries Found'
                });
        })
        .catch(error => {
            res.status(500).json({
                error: err
            });
        });
}

exports.update_online_writing_answer = (req, res) => {

    OnlineWritingAnswerModel.findOneAndUpdate(
        {
            studentEmail: req.body.email,
            testNumber: req.body.testNumber,
            sheetNumber: req.body.sheetNumber
        },
        {
            onlineAnswer: req.body.checkedAnswer,
            answerIsChecked: true,
            marksScored: req.body.marksScored,
        }
    )
        .exec()
        .then(docs => {
            if (docs) return res.status(200).json({
                message: "Answer submitted successfully"
            });
            else
                return res.status(204).json({
                    message: 'No entries Found'
                });
        })
        .catch(error => {
            res.status(500).json({
                error: err
            });
        });
}