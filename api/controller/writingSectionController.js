
const mongoose = require('mongoose');
const WritingAnswerModel = require('../models/writingSectionAnswer');

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
        checkStatus: 0
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
            console.log(error);
            res.status(500).json({
                error: err
            });
        });
}