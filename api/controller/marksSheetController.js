const MarkSheetModel = require('../models/answerSheet');
const mongoose = require('mongoose');
exports.insert_marksSheet = (req, res) => {
    const present_date = new Date();
    const marksSheet = new MarkSheetModel({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        testNumber: req.body.testNumber,
        section: req.body.section,
        marksBand: req.body.marksBand,
        countOfCorrectAnswers: req.body.countOfCorrectAnswers,
        userType: req.body.userType,
        createdAt: present_date,
    });

    marksSheet
        .save()
        .then(result => {
            if (result) {

                return res.status(200).json({
                    message: 'MarkSheet Added Successfully',
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}


exports.display_marks = (req, res) => {
    MarkSheetModel
        .find({email:req.query.email})
        .exec()
        .then(result => {
            if (result.length > 0) return res.status(200).json(result);
            else
                return res.status(204).json({
                    message: 'No marks found'
                });
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });

}