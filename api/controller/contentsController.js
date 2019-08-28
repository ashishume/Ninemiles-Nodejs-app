const ParagraphModel = require('../models/contents');
const mongoose = require('mongoose');
exports.insert_paragraph = (req, res) => {
    const present_date = new Date();
    const paragraph = new ParagraphModel({
        _id: new mongoose.Types.ObjectId(),
        paragraphTitle: req.body.paragraphTitle,
        paragraphHeading: req.body.paragraphHeading,
        author: req.body.author,
        createdAt: present_date,
        section: req.body.section,
        testNumber: req.body.testNumber,
        paragraphUserType: req.body.paragraphUserType,
        status: 1
    });

    paragraph
        .save()
        .then(result => {
            return res.status(200).json({
                message: 'Paragraph Added Successfully',
                object: result
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}


exports.display_paragraph = (req, res) => {

    ParagraphModel.find({ status: 1 }, { status: 0, __v: 0,createdAt:0 })
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