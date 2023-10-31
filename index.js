// const express = require('express')

// var http = require('http')
// const app= express()

// http.createServer(function(req,res){
//     res.end("Hello World")
// }).listen(3000)

// console.log("server is running...")


const express =require('express')
const app=express()
const mongoose=require('mongoose')
const route=require('./routes/routes')
app.use(express.json());
const PORT=8080
mongoose.connect('mongodb+srv://sruchru21:srujana@cluster0.tplpszx.mongodb.net/db1') 
.then(()=>{console.log("Database connected")})
.catch((error)=>{console.log(error)})
app.use('/',route);
app.listen( PORT ,()=>{
    console.log(`Server is running ${PORT}`);
})


//mongodb+srv://user01:user01@cluster0.tplpszx.mongodb.net/db1