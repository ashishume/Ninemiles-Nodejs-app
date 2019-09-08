const express = require('express');
const router = express.Router();
const paragraphController = require('../controller/contentsController');


router.post('/addParagraph',paragraphController.insert_paragraph);
router.get('/listParagraph',paragraphController.display_paragraph);
router.put('/updateParagraph',paragraphController.update_paragraph);
router.delete('/deleteParagraph',paragraphController.delete_paragraph);

module.exports = router;
