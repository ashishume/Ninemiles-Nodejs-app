const express = require('express');
const router = express.Router();
const Timeline = require('../models/timeline');
const mongoose = require('mongoose');

router.post('/', (req, res, next) => {
  const user = new Timeline({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    userId:req.body.userId,
    projectName: req.body.projectName,
    author: req.body.author,
    cost: req.body.cost,
    tags: req.body.tags,
    description: req.body.description,
    projectSubject: req.body.projectSubject,
    date: req.body.date,
    duration: req.body.duration,
    projectType: req.body.projectType,
    skillsRequired: req.body.skillsRequired,
    projectLink: req.body.projectLink,
    levelOfDifficulty: req.body.levelOfDifficulty
  });

  user.save().then(result => {
    console.log(result);
    res
      .status(200)
      .json({
        message: 'project added successfully',
        project: {
          results: result
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          error: err
        });
      });
  });
});
router.get('/:userId', (req, res, next) => {
  Timeline.find({
    userId: req.params.userId
  })
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        projects: docs
      };
      if (docs.length > 0) res.status(200).json(response);
      else
        res.json({
          message: 'No entries Found',
          posts:docs.length
        });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({
        error: err,
        message: 'user not found'
      });
    });
});
module.exports = router;
