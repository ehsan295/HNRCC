var express = require('express')
var cors = require('cors')

var Users = require('./routes/Users')
var app = express()
var port = 3000




app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())



app.use('/signup', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})