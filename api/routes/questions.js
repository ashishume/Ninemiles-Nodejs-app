const express = require('express');
const router = express.Router();
const questionsController = require('../controller/questionsController');


router.post('/addQuestion',questionsController.insert_questions);
router.get('/listQuestions',questionsController.display_questions);

module.exports = router;
