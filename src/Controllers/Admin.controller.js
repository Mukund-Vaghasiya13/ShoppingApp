import { ApiError } from "../utility/ApiError.js";
import { ApiResponse } from "../utility/ApiResponse.js";
import { User } from "../AppModles/AuthModle.js";
import { Product } from "../AppModles/ProductModle.js";
import { Catgory } from "../AppModles/CategoryModle.js";
import { asynchandler } from "../utility/AsyncHandler.js";
import { uploadOnCloudinary } from "../middleware/Cloudnary.js";

const CreateCatagory = asynchandler(async (req,res)=>{
    const filePath = req.file
    console.log(filePath)

    const {name} = req.body

    if(!filePath){
        // throw Error
    }

    const FileOnCloud = await uploadOnCloudinary(filePath.path)

    if(!FileOnCloud){
        // throw Error
    }

    const catagory = await Catgory.create({
        name:name,
        image:FileOnCloud.url
    })

    if(!catagory){
        // throw Error
    }

    //TODO: Send Response

  
})


export {
    CreateCatagory
}