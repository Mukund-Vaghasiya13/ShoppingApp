import { asynchandler } from "../utility/AsyncHandler.js"
import jwt from "jsonwebtoken"
import { ApiError } from "../utility/ApiError.js"

const userAuthOrNot = asynchandler(async (req,res,next)=>{
    const token = req.header('Authorization')?.replace("Bearer ","") || req.cookies.AccessToken

    if(!token){
        // throw Api error 
        return res.status(200).json(
            new ApiError("Asscess Token Invalid!",false)
        )
    }

    const user = jwt.verify(token,"mukundvaghasiya")

    if (!user){
        return res.status(200).json(
            new ApiError("User Auth Problem",false)
        )
    }

    req.user = user

    next()
})

export {
    userAuthOrNot
}