const express = require('express');
const router = express.Router();
const Timeline = require('../models/timeline');


router.get('/',(req,res,next)=>{
    res.json({
        message:"Welcome To NineMiles"
    })
})


module.exports = router;