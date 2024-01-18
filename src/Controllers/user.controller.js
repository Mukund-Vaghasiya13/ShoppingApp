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
        // throw Api error
    }
   
    if(!user){
        // throw error
        console.log("null")
    }

    const valid = await user.MatchPasswordIsValid(password)

    if (!valid){
        // throw Error
       
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


const logout = asynchandler(async (req,res)=>{
    const user = req.user

    if (!user){
        // Throw error 
    }

    const checking = await User.findById(user._id)

    if(!checking){
        // Throw error
    }

    const option = {
        httpOnly: true,
        secure: true
    }

    res.status(200).clearCookie("AccessToken",option).json(
        new ApiResponse({},"Logout Out Successfull",true)
    )

})

export {
    registerUser,
    loginUser
}