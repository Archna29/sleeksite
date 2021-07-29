const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const  userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
email:{
type:String,
required:true,
},
phone:{
    type:Number,
    required:true
},
password:{
    type:String,
    required:true
},
cpassword:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now
},

tokens:[{
    token:{
        type:String,
        required:true
    }
}
]
    }
)
//Code to generate hash password  using bcryptjs
userSchema.pre('save', async function (next) {
   if(this.isModified('password'))
    {
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
    });
    //Code using JSONWEBTOKEN  to generate token 
    userSchema.methods.generateAuthToken=async function(){
        try{
let token=jwt.sign({_id: this._id}, process.env.SECRET_KEY);
this.tokens=this.tokens.concat({token:token});
await this.save();
return token;
        }
        catch(err){
            console.log(err);
        }
    }
   
    const User=new mongoose.model('USER',userSchema);
 module.exports=User;