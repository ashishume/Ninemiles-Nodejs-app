const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const mailController = require('../controller/mailController')

//INSERT THE USER INTO DB
router.post('/signup', userController.user_controller);

//FETCH THE DETAILS OF ALL USER
router.get('/listUsers', userController.get_user_details);

//FETCH THE DETAILS OF USER BASED ON USER ID
router.get('/', userController.get_user_by_email);

//DELETE THE USER
router.delete('/deleteUser', userController.delete_user_by_email);

//CHANGE PAYMENT STATUS
router.put('/paymentStatus', userController.set_payment_status);

//CHANGE USER TYPE
router.put('/updateUserType', userController.update_user_type);


router.post('/sendEmail', mailController.send_mail)
module.exports = router;
