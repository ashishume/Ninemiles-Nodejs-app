const QuestionsModel = require('../models/questions');
const mongoose = require('mongoose');
exports.insert_questions = (req, res) => {
    const present_date = new Date();


    var questionType;
    if (req.body.questionType == 1) {
        questionType = "MCQ"
    } else if (req.body.questionType == 2) {
        questionType = "Type in the blanks"
    } else if (req.body.questionType == 3) {
        questionType = "Select in the blanks"
    }

    const questions = new QuestionsModel({
        _id: new mongoose.Types.ObjectId(),
        questionTitle: req.body.questionTitle,
        options: req.body.options,
        questionType: questionType,
        testNumber: req.body.testNumber,
        author: req.body.author,
        optionsList: req.body.optionsList,
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
exports.update_questions = (req, res) => {
    var id = mongoose.Types.ObjectId(req.body._id)
    const present_date = new Date();
    QuestionsModel
        .findOneAndUpdate(
            { status: 1, _id: id },
            {
                questionTitle: req.body.questionTitle,
                options: req.body.options,
                questionType: req.body.questionType,
                testNumber: req.body.testNumber,
                author: req.body.author,
                optionsList: req.body.optionsList,
                sectionCategory: req.body.sectionCategory,
                createdAt: present_date,
                section: req.body.section,
                questionUserType: req.body.questionUserType,

            })
        .exec()
        .then(result => {
            if (result) {
                return res.status(200).json({
                    message: "Question Updated Successfully"
                });
            }
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


exports.delete_questions = (req, res) => {
    var id = mongoose.Types.ObjectId(req.query._id)
    QuestionsModel
        .findOneAndUpdate(
            { status: 1, _id: id },
            {
                status: 0
            })
        .exec()
        .then(result => {
            if (result) {
                return res.status(200).json({
                    message: "Question Deleted Successfully"
                });
            }
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