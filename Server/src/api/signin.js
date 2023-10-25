const express = require('express');
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const router = express.Router();

router.post('/signin', async(req, res)=>{
    const {email, password} = req.body
    const userWithEmail = await User.findOne({where:{email}}).catch((err)=>{
        console.log(
           { "Error":err}
        )
    })
    if(!userWithEmail){
        return res.json({message:'Email or Password does not match'})
    }
    if(userWithEmail.password !== password){
       return res.json({message:'Email or cvxcvPassword does not match'})
    }
    const jwtToken = jwt.sign({id:userWithEmail.id, email:userWithEmail.email}, process.env.JWT_SECRET)
    res.json({message:'Welcome Back'})
})
module.exports = router