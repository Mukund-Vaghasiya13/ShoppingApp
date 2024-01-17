import { asynchandler } from "../utility/AsyncHandler.js";
import { User } from "../AppModles/AuthModle.js";
import { ApiResponse } from "../utility/ApiResponse.js";

const registerUser = asynchandler(async(req,res)=>{
    //Take value from user
    const {username,email,password} = req.body

    //validate user input
    if ([username,email,password].some((e)=> e == null)){
        //Throw Error
    }

    //if Ok ,Then create User
    const user = await User.create({
        username,
        email,
        password
    })

    // check User created or not
    if(!user){
        // Throw error
    }

    // send response if Ok
    res.status(201).json(
        new ApiResponse({},"User Created Successfully",true)
    )
})

const loginUser = asynchandler(async (req,res)=>{
    
})

export {
    registerUser
}