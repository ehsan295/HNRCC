const express = require('express');
const User = require('../models/user')

const router = express.Router();

router.post('/signup',async(req, res)=>{
    const {name,email,password} = req.body
    const existedUser = await User.findOne({where:{email}}).catch(err=>console.log(err))
    if(existedUser){
        return res.json({
            message:'User Already Exists'
        })
    }
    const newUser = new User({name,email, password})
    const savedUser = await newUser.save().catch(err=>{console.log(err); res.json({error:'can not signup'})})
    if(savedUser){
      res.json({
        message:'works'
      })
    }
    
})

module.exports = router;
