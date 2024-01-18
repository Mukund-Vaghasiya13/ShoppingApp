import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const Userschema = new mongoose.Schema({
    identity:{
        type:String,
        default:"user"
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    username:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        unique:true
    }
},{
    timestamps:true
})

Userschema.pre("save",async function(next){
   this.password = await bcrypt.hash(this.password,10);
    next()
})

Userschema.methods.MatchPasswordIsValid = async function(password){
    return await bcrypt.compare(password,this.password)
}

Userschema.methods.GenerateAccessToken = function(user){
   return jwt.sign({
    _id:user._id,
    identity:user.identity,
    email:user.email,
    username:user.username
   },"mukundvaghasiya")
}

export const User = new mongoose.model("Auth",Userschema)