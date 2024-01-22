import { loginUser, registerUser } from "../Controllers/user.controller.js";
import { Router } from "express";
import { userAuthOrNot } from "../middleware/IsUSerAuthOrNot.js";
import { CreateCatagory } from "../Controllers/Admin.controller.js";
import { upload } from "../middleware/uplodeimage.js";

const router = Router()

router.route("/register").post(
    registerUser
)

router.route("/login").post(
    loginUser
)

// temp

router.route("/uplode").post(
    upload.single("catgory"),
    CreateCatagory
)

export const UserRoute = router