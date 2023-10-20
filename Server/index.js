import express from 'express'
import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'

const salt = 10

const app = express()
app.use(express.json())

const corsOptions ={
    origin:'http://localhost:5173', 
    methods:['POST', 'GET'],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(cookieParser())
const database = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crm'
})

const verifyUser  = (req, res, next)=>{
    const token = req.cookies.token
    if(!token){
        return res.json({Error:'NOt Authenticated'})
    }
    else{
        jwt.verify(token, 'JWT-Sercret-in-.env-file', (err, decoded)=>{
            if(err){
                return res.json({Error:'Token Error'})
            }
            else{
                req.name = decoded.name
                next()
            }
        })
    }
}

app.get('/',verifyUser, (req, res)=>{
    return res.json({
        Status:'Sucess',
        name:req.name
    })

})



app.post('/signup', (req,  res)=>{
    const sql = 'INSERT INTO signup (`name`,`email`, `password`) VALUES(?)';
    bcrypt.hash(req.body.password, salt, (err, hash)=>{
        if(err) return res.json({Error:"Error in hashing the password"})
        const values = [
            req.body.name,
            req.body.email,
            hash
        
        ]
        database.query(sql, [values], (err, result)=>{
            if(err) return res.json({
                Error:'Error in passing the data to the server'
            })
            return res.json({Status:'Sucess'})      
        })
    })
    
})


app.post('/signin', (req, res)=>{
    const sql = 'SELECT * FROM signup WHERE email = ?'
    database.query(sql, [req.body.email], (err, data)=>{
        if(err) return res.json({Error:'SignIn Error'})
        if (data.length >0) {
            bcrypt.compare(req.body.password, data[0].password, (err, response)=>{
                if(err) return res.json({Error:'Error in comparing password'})
                if(response){
                    const name = data[0].name
                    const token = jwt.sign({name},'JWT-Sercret-in-.env-file', {expiresIn:'1d'})
                    res.cookie('token', token)
                    return res.json({Status:"Sucess"})
                }
                else{
                    return res.json({Error:'Password not matched'})
                }
            })
        }
        else{
            return res.json({Error:'The user Already Exists'})
        }
    })
})

app.get('/logout',(req, res)=>{
    req.clearCookie('token')
    return res.json({Status:'Sucess'})
} )


app.listen(3000, ()=>{
        console.log('app running on port 3000')
})