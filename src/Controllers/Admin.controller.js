import { ApiError } from "../utility/ApiError.js";
import { ApiResponse } from "../utility/ApiResponse.js";
import { User } from "../AppModles/AuthModle.js";
import { Product } from "../AppModles/ProductModle.js";
import { Catgory } from "../AppModles/CategoryModle.js";
import { asynchandler } from "../utility/AsyncHandler.js";
import { uploadOnCloudinary } from "../middleware/Cloudnary.js";

const CreateCatagory = asynchandler(async (req,res)=>{
    const filePath = req.file

    const {name} = req.body

    if([filePath,name].some((e)=>e==null)){
        // throw Error
        return res.status(400).json(
            new ApiError("File Uplode error And Invalid Data",false)
        )
    }

    const FileOnCloud = await uploadOnCloudinary(filePath.path)

    if(!FileOnCloud){
        // throw Error
        new ApiError("File Uplode On cloud error try again!",false)
    }

    const catagory = await Catgory.create({
        name:name,
        image:FileOnCloud.url
    })

    if(!catagory){
        // throw Error
        new ApiError("Unable to create Category",false)
    }

    //TODO: Send Response
    res.status(200).json(
        new ApiResponse({},"Catagory Created Successfully",false)
    )
})

const ProductUplodeInCatagory = asynchandler(async (req,res)=>{
    const filePath = req.file
    const {catagoryID,name,price} = req.body

    if([catagoryID,name,price,filePath].some((e)=>e==null)){
        return res.status(400).json(
            new ApiError("Invalid Data Entry and Image uplode fail",false)
        )
    }

    const FileOnCloud = await uploadOnCloudinary(filePath.path)

    if(!FileOnCloud){
        // throw Error
        new ApiError("File Uplode On cloud error try again!",false)
    }

    const product = await Product.create({
        Productname:name,
        image:FileOnCloud.url,
        price:price,
        refId:catagoryID
    })

    if(!product){
        new ApiError("Error in Creating Product",false)
    }

    res.status(200).json(
        new ApiResponse({},"Product Created Successfully",false)
    )
})


export {
    CreateCatagory,
    ProductUplodeInCatagory
}