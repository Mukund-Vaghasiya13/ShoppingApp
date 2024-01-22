import mongoose from "mongoose";
import { Types } from "mongoose";

const ProductSchema = new mongoose.Schema({
    Productname:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    price:{
        type:String
    },
    refId:{
        type:Types.ObjectId,
        ref:"Catgory"
    }

},{timestamps:true})


export const Product = new mongoose.model("Product",ProductSchema)