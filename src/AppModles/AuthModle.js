import mongoose from "mongoose";

const schema = new mongoose.Schema({
    identity:{
        type:String,
        required: true,
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

export const User = new mongoose.model("Auth",schema)