const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express=require("express");

const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());

app.use(express.json());
dotenv.config({path: './config.env'});
require('./db/conn');
app.use(require('./router/auth'));
const PORT=process.env.PORT;
app.get("/",(req,res)=>{
    res.send("yeee");
})
app.listen(PORT,()=>{
    console.log(`hey there ${PORT}`);
})