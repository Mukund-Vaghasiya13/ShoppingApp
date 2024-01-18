import { asynchandler } from "../utility/AsyncHandler.js"
import jwt from "jsonwebtoken"

const userAuthOrNot = asynchandler(async (req,res,next)=>{
    const token = req.header('Authorization')?.replace("Bearer ","") || req.cookies.AccessToken

    if(!token){
        // throw Api error 
    }

    const user = jwt.verify(token,"mukundvaghasiya")

    if (!user){
        // Thrrow Error
    }

    req.user = user

    next()
    

})

export {
    userAuthOrNot
}