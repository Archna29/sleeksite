const express=require("express");
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();
const authenticate=require('../middleware/Authenticate');
require('../db/conn');
const User = require('../models/userSchema');

router.get("/",(req,res)=>{
    res.send("hello from home");
});

router.get('/register',(req,res)=>{
    res.send("this is register page");
})
router.get('/signin',(req,res)=>{
    res.send("this is signin page");
})
//Code  for User Signup
router.post('/register',async(req,res)=>{
const {name,email,phone,password,cpassword}=req.body;
if(!name||!email||!phone||!password||!cpassword){
return res.status(422).json({error:"Incomplete information"});
}
try{
const data =await User.findOne({email})
   if (data){
return res.status(422).json({error:"email already exist"});
   }
   else if(password!=cpassword){
       res.status(422).json({err:"Passowrd and confirm password is not matched"})
   }
   else{
const user=new User({name,email,phone,password,cpassword});
const usersignup=await user.save();
if(usersignup){
    res.status(400).json({msg:"usr signup"})
}
else{
    res.status(422).json({err:"not signp"})  
}
}
}
catch(err){
    console.log(err);
}
}
)
//Code for Userlogin
router.post('/signin',async(req,res)=>{    
    try{
        let token;
        const {email,password}=req.body;
    if(!email||!password){
        res.status(400).json({err:"Please fill complete creadiential"});
    }
        const userLogin=await User.findOne({email});
        if(userLogin){
        const isMatch=await bcrypt.compare(password,userLogin.password);
      
        token=await userLogin.generateAuthToken();
        console.log(token);
        //for cookie in website
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+ 2592000000),
            httpOnly:true
        });
        if(isMatch){
            res.json({msg:"user loggedin success"});
        }
        else{
            res.status(400).json({err:"Invvalid creadiential"})
        }
   }
    else{
        res.status(400).json({err:"Invalid crediantials"});
    }
}
catch(err){
console.log(err);
}    
}
)

//About us page 
router.get('/about',authenticate,(req,res)=>{
    console.log("Hellow");
    res.send(req.rootUser);
});

//data for home page extracted from database
router.get('/getData',authenticate,(req,res)=>{
    res.send(req.rootUser);
});
module.exports=router;