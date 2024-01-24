import { asynchandler } from "../utility/AsyncHandler.js";
import { Product } from "../AppModles/ProductModle.js";
import { Catgory } from "../AppModles/CategoryModle.js";
import { ApiError } from "../utility/ApiError.js";
import { ApiResponse } from "../utility/ApiResponse.js";

const GetListOfCatagorey = asynchandler(async (req,res)=>{
    const GetListOfCatagorey = await Catgory.find({})

    if(!GetListOfCatagorey){
        // Throw Error 
        return res.status(400).json(
            new ApiError("Fail to get Catagory",false)
        )
    }

    // todo Return Response
    res.status(200).json(
        new ApiResponse(GetListOfCatagorey,"List of Catagory",true)
    )
})

const GetProductList = asynchandler(async (req,res)=>{
    const GetListOfProduct = await Product.find({})

    if(!GetListOfProduct){
        // Throw Error 
        return res.status(400).json(
            new ApiError("Fail to get Catagory",false)
        )
    }

    // todo Return Response
    res.status(200).json(
        new ApiResponse(GetListOfProduct,"List of Product",true)
    )
})

export {
    GetListOfCatagorey,
    GetProductList
}