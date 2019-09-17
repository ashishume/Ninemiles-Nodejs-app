const express = require('express');
const router = express.Router();
const testsController = require('../controller/testsController');


router.get('/listTests', testsController.display_tests);
router.post('/addTests', testsController.insert_tests);
router.put('/updateTests', testsController.update_tests);
router.put('/changeTestStatus', testsController.change_test_status);

module.exports = router;
