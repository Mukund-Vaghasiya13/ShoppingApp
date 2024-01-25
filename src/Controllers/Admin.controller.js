import { ApiError } from "../utility/ApiError.js";
import { ApiResponse } from "../utility/ApiResponse.js";
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
        new ApiResponse({},"Catagory Created Successfully",true)
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


const deleteCatagory = asynchandler(async (req,res)=>{
    const {catID} = req.body

    if(!catID){
        return res.status(400).json(
            new ApiError("Catagorey Id not Found",false)
        )
    }

    const DeleteProduct = await Product.deleteMany({
        refId:catID
    })

    // if(DeleteProduct.deletedCount == 0){
    //     return res.status(400).json(
    //         new ApiError("Unable to delete product in catgory",false)
    //     )
    // }

    const deleteCatagory = await Catgory.findByIdAndDelete(catID)

    if(!deleteCatagory){
        return res.status(400).json(
            new ApiError("Not able to delete Catagory",false)
        )
    }



    res.status(200).json(
        new ApiResponse({},"Catagory Deleted",true)
    )
})

const DeleteSingleProduct = asynchandler(async(req,res)=>{
    const {ProId} = req.body

    if(!ProId){
        return res.status(400).json(
            new ApiError("Not able to find product",false)
        )
    }

    const deleteProduct = await Product.findByIdAndDelete(ProId)

    if(!deleteProduct){
        return res.status(400).json(
            new ApiError("Not able to delete product",false)
        )
    }

    res.status(200).json(
        new ApiResponse({},"Product Deleted successfully",false)
    )
})

const AddNewAdminUser = asynchandler(async (req,res)=>{
    //TODO: Add Admin
})

export {
    CreateCatagory,
    ProductUplodeInCatagory,
    deleteCatagory,
    DeleteSingleProduct
}