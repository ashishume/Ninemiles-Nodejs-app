const express = require('express');
const router = express.Router();
const issueController = require('../controller/issuesController');

router.post('/addIssue', issueController.insert_issue);
router.get('/showIssues', issueController.display_issues);
router.put('/updateIssues', issueController.update_issues);

module.exports = router;
