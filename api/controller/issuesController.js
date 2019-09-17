const IssueModel = require('../models/issues');
const mongoose = require('mongoose');
exports.insert_issue = (req, res) => {
    const present_date = new Date();
    const issue = new IssueModel({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.name,
        name: req.body.email,
        message: req.body.message,
        createdAt: present_date,
    });

    issue
        .save()
        .then(result => {
            if (result) {

                return res.status(200).json({
                    message: 'Issue Added Successfully',
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}
exports.display_issues = (req, res) => {
    IssueModel.find()
        .exec()
        .then(result => {
            if (result.length > 0) return res.status(200).json(result);
            else
                return res.status(204).json({
                    message: 'No issues found'
                });
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}
exports.update_issues = (req, res) => {
    var id = mongoose.Types.ObjectId(req.body.id)
    IssueModel.findOneAndUpdate({ _id: id }, { status: req.body.status })
        .exec()
        .then(result => {
            if (result)
                return res.status(200).json({
                    message: "Issue status updated successfully"
                });
            else {
                return res.status(404).json({
                    message: 'No issues found'
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
}