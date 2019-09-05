const QuestionsModel = require('../models/questions');
const mongoose = require('mongoose');
exports.insert_questions = (req, res) => {
    const present_date = new Date();


    var questionType;
    if (req.body.questionType == 1) {
        questionType = "MCQ"
    } else if (req.body.questionType == 2) {
        questionType = "Matching questions"
    } else if (req.body.questionType == 3) {
        questionType = "Short questions"
    } else if (req.body.questionType == 4) {
        questionType = "Type in the blanks"
    } else if (req.body.questionType == 5) {
        questionType = "Select in the blanks"
    }

    const questions = new QuestionsModel({
        _id: new mongoose.Types.ObjectId(),
        questionTitle: req.body.questionTitle,
        options: req.body.options,
        questionType: questionType,
        testNumber: req.body.testNumber,
        author: req.body.author,
        optionsList:req.body.optionsList,
        sectionCategory: req.body.sectionCategory,
        createdAt: present_date,
        section: req.body.section,
        questionUserType: req.body.questionUserType,
        status: 1
    });

    questions
        .save()
        .then(result => {
            return res.status(200).json({
                message: 'Question Added Successfully',
                object: result
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}

exports.display_questions = (req, res) => {
    QuestionsModel
        .find({ status: 1 }, { createdAt: 0, status: 0 })
        .exec()
        .then(result => {
            if (result.length > 0) return res.status(200).json(result);
            else
                return res.status(204).json({
                    message: 'No questions found'
                });
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}