


const app = require('./app');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  
  console.log(`Listening: http://localhost:${port}`);
  
});








// const app = express()

// app.use(cors())
// app.use(express.json())
// const database = mysql.createConnection({
//     user:'root',
//     host:'localhost',
//     password:'',
//     database:'hnrcc'
// })
// app.post('/signup',(req, res)=>{
//     const name = req.body.name
//     const email  = req.body.email
//     const password = req.body.password
//     database.query('INSERT INTO signup (name, email, password) VALUES(?,?,?)', [name, email, password],(err, result)=>{
//         console.log(err)
//     })
// })


// app.post('/signin',(req, res)=>{
    
//     const email  = req.body.email
//     const password = req.body.password
//     database.query('SELECT * FROM signup WHERE email = ? AND password = ?', [email, password],(err, result)=>{
//         if(err){
//             res.send({err:err})
//         }
//         if(result.length > 0){
//             res.send(result)
//         }else{
//             res.send({message:'ایمیل و یا رمز عبور نامعتبر.'})
//         }
//     })
// })
