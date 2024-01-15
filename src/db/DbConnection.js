import mongoose from "mongoose";

const connectivity = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://Mukund:8320017126@cluster0.vn1ihop.mongodb.net/",{
            dbName:"ShoppingApp"
        })
    }catch{
        console.log("😡 could not connect to Db Name ShoppingApp")
    }
}

export {
    connectivity
}