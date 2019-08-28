const QuestionsModel = require('../models/questions');
const mongoose = require('mongoose');
exports.insert_questions = (req, res) => {
    const present_date = new Date();
    const questions = new QuestionsModel({
        _id: new mongoose.Types.ObjectId(),
        questionTitle: req.body.questionTitle,
        options: req.body.options,
        questionType: req.body.questionType,
        author: req.body.author,
        createdAt: present_date,
        section:req.body.section,
        questionUserType:req.body.questionUserType,
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
        .find({status:1},{createdAt:0,status:0})
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