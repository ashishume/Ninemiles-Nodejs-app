const express = require('express');
const router = express.Router();
const paragraphController = require('../controller/contentsController');
const writingController = require('../controller/writingSectionController');


router.post('/addParagraph',paragraphController.insert_paragraph);
router.get('/listParagraph',paragraphController.display_paragraph);
router.put('/updateParagraph',paragraphController.update_paragraph);
router.delete('/deleteParagraph',paragraphController.delete_paragraph);

//WRITING SECTIONS
router.post('/writingAnswer',writingController.insert_writing_answer);
router.get('/showAnswer',writingController.display_writing_answer);
module.exports = router;
