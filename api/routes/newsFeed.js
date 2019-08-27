const express = require('express');
const router = express.Router();
const Timeline = require('../models/timeline');

const newsFeedController=require('../controller/newsFeed')

// Routes of newsFeed
router.get('/', newsFeedController.get_all_newsFeed_data);
router.get('/:userId', newsFeedController.get_newsFeed_data_userId);
module.exports = router;
