import { asynchandler } from "../utility/AsyncHandler.js";
import { User } from "../AppModles/AuthModle.js";
import { ApiResponse } from "../utility/ApiResponse.js";
import { ApiError } from "../utility/ApiError.js";

const registerUser = asynchandler(async(req,res)=>{
    //Take value from user
    const {username,email,password} = req.body

    //validate user input
    if ([username,email,password].some((e)=> e == null)){
        //Throw Error
        return res.status(400).json(
            new ApiError("Invalid Details",false)
        )
    }

    //if Ok ,Then create User
    const user = await User.create({
        username,
        email,
        password
    })

    // check User created or not
    if(!user){
        return res.status(400).json(
            new ApiError("Unable to create User",false)
        )
    }

    // send response if Ok
    res.status(201).json(
        new ApiResponse({},"User Created Successfully",true)
    )
})

const loginUser = asynchandler(async (req,res)=>{
    const {email,username,password} = req.body
     
    let user = null

    if(email){
        user = await User.findOne({
            email
        })
    }else if(username){
        user = await User.findOne({
            username
        })
    }else{
        return res.status(400).json(
            new ApiError("Invalid Details",false)
        )
    }
   
    if(!user){
        return res.status(400).json(
            new ApiError("Unable to create User",false)
        )
    }

    const valid = await user.MatchPasswordIsValid(password)

    if (!valid){
        return res.status(400).json(
            new ApiError("Invalid Password",false)
        )
    }   

    const token = user.GenerateAccessToken(user)
    const option = {
        httpOnly: true,
        secure: true
    }
    
    res.status(200).cookie("AccessToken",token,option).json(
        new ApiResponse(token,"Login successfull",true)
    )

})

export {
    registerUser,
    loginUser,
}