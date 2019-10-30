const express = require('express');
const router = express.Router();
const markSheetController = require('../controller/marksSheetController');


router.post('/addMarks',markSheetController.insert_marksSheet);
router.get('/showMarks',markSheetController.display_marks);
router.get('/showSectionDetails',markSheetController.display_section_marks);
router.get('/average',markSheetController.average_marks);



module.exports = router;
