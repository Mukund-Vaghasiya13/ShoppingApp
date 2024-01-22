import mongoose from "mongoose";

const CatgorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    image:{
        type:String
    }
},{timestamps:true})

export const Catgory = new mongoose.model("Catgory",CatgorySchema)