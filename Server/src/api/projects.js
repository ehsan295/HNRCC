const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/projects', passport.authenticate('jwt', {session:false}),(req, res)=>{
    res.send("You have reached to the project page")
})



module.exports  = router