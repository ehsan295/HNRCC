const passport  = require('passport')
const passportJWT = require('passport-jwt')
const User = require('../models/user')

const ExtractJWT = passportJWT.ExtractJwt
const StrategyJWT = passportJWT.Strategy
 

passport.use(new StrategyJWT({jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), secretOrKey:process.env.JWT_SECRET},(payload, done)=>{
    return User.findOne({where:{id:payload.id}}).then((user)=>{
        return done(null, user)
    }).catch(err => done)




}))