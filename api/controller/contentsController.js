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
        paragraphSectionCategory: req.body.paragraphSectionCategory,
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

    ParagraphModel.find({
        status: 1,
        paragraphUserType:req.query.paragraphUserType,
        testNumber:req.query.testNumber,
        paragraphSectionCategory:req.query.paragraphSectionCategory
    }, { status: 0, __v: 0, createdAt: 0 })
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
exports.update_paragraph = (req, res) => {
    const present_date = new Date();
    var id = mongoose.Types.ObjectId(req.body._id)
    ParagraphModel.findOneAndUpdate(
        { status: 1, _id: id },
        {
            paragraphTitle: req.body.paragraphTitle,
            paragraphHeading: req.body.paragraphHeading,
            author: req.body.author,
            createdAt: present_date,
            section: req.body.section,
            testNumber: req.body.testNumber,
            paragraphUserType: req.body.paragraphUserType,
            paragraphSectionCategory: req.body.paragraphSectionCategory
        }
    )
        .exec()
        .then(docs => {
            if (docs) {
                return res.status(200).json({ message: "Paragraph Updated Successfully" });
            }
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

exports.delete_paragraph = (req, res) => {
    var id = mongoose.Types.ObjectId(req.query._id)
    ParagraphModel.findOneAndUpdate(
        { status: 1, _id: id },
        {
            status: 0
        }
    )
        .exec()
        .then(docs => {
            if (docs) {
                return res.status(200).json({ message: "Paragraph Deleted Successfully" });
            }
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


