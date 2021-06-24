const express= require('express')
const app=express()
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
dotenv.config()
app.listen(process.env.PORT,console.log("listen to port"))
app.use(bodyParser.json())
const router=require('./router')
app.use('/',router)

const mongoose = require("mongoose")
var optionConnection = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

mongoose.connect(process.env.DB_CONNECT, optionConnection)
    .then(() => { console.log("connected"); })
    .catch((err) => { console.log(`could not connect: ${err}`) });
