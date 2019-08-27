const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


//INSERT THE USER INTO DB
router.post('/signup', userController.user_controller);

//FETCH THE DETAILS OF ALL USER
router.get('/listUsers', userController.get_user_details);

//FETCH THE DETAILS OF USER BASED ON USER ID
router.get('/', userController.get_user_by_userId);

//DELETE THE USER
router.put('/deleteUser', userController.delete_user_by_userId);

module.exports = router;
