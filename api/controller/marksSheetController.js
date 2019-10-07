const MarkSheetModel = require('../models/answerSheet');
const UploadWritingSheet = require('../models/onlineUpload');
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
        .find({ email: req.query.email })
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

exports.average_marks = (req, res) => {
    let marksBandArray = []
    MarkSheetModel
        .find({ email: req.query.email })
        .exec()
        .then(result => {
            var count = 0;
            let marksArray = [];
            for (let test = 1; test <= 32; test++) {
                for (let j = 0; j < result.length; j++) {
                    if (result[j].testNumber == test) {
                        count++;
                        marksArray.push(result[j].marksBand);
                    }
                }
                if (count == 4) {
                    var sum = 0
                    marksArray.forEach(value => {
                        sum += value;
                    })
                    var avg = sum / 4;
                    console.log("original", avg);

                    var roundValue = Math.floor(avg);
                    var value1 = roundValue + 0.0;
                    var value2 = roundValue + 0.24;
                    var value3 = roundValue + 0.25;
                    var value4 = roundValue + 0.74;
                    var value5 = roundValue + 0.75;
                    var value6 = roundValue + 1.0;

                    var finalValue1 = roundValue + 0.0
                    var finalValue2 = roundValue + 0.5
                    var finalValue3 = roundValue + 1.0
                    if (avg > value1 && avg < value2)
                        avg = finalValue1;
                    if (avg > value3 && avg < value4)
                        avg = finalValue2;
                    if (avg > value5 && avg < value6)
                        avg = finalValue3;

                    marksBandArray.push({ testNumber: test, average: avg })
                    marksArray = []
                    count = 0
                }
            }


            if (result.length > 0) return res.status(200).json(marksBandArray);
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