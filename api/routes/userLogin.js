const express = require('express');
const router = express.Router();
const User = require('../models/user');
var jwt = require('jsonwebtoken');

router.post('/',(req,res,next)=>{
    const email=req.body.email;
   const token= jwt.sign(
    {
        email:email
    },
    "secret",
    {
        expiresIn:"3d"
    })

    User
    .find({email:email})
    .exec()
    .then(result=>{
        
        console.log(result.email);
        
        if(result.length>0)
        {
            res.json({
                message:"Email Already Exists",
                status:1,
                object:result,
                token:token
                
            })
        }else{
            res.json({
                message:"User Does not exist",
                status:0,
                object:result,
                token:token
            })
        }
    })

})




module.exports = router;