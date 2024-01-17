import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
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
})

schema.pre("save",async function(){
    await bcrypt.hash(this.password,10);
})

export const User = new mongoose.model("Auth",schema)