const express = require('express');
const router = express.Router();
const questionsController = require('../controller/questionsController');


router.post('/addQuestion',questionsController.insert_questions);
router.get('/listQuestions',questionsController.display_questions);
router.put('/updateQuestion',questionsController.update_questions);
router.delete('/deleteQuestion',questionsController.delete_questions);

module.exports = router;
