import mongoose from "mongoose";

const connectivity = async ()=>{
    try{
        await mongoose.connect(process.env.MongoUrl,{
            dbName:"ShoppingApp"
        })
    }catch{
        console.log("😡 could not connect to Db Name ShoppingApp")
    }
}

export {
    connectivity
}