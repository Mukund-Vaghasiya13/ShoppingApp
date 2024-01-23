import { loginUser, registerUser } from "../Controllers/user.controller.js";
import { Router } from "express";
import { userAuthOrNot } from "../middleware/IsUSerAuthOrNot.js";
import { CreateCatagory } from "../Controllers/Admin.controller.js";
import { upload } from "../middleware/uplodeimage.js";
import { GetListOfCatagorey } from "../Controllers/UserAndAdmin.controller.js";
const router = Router()

router.route("/register").post(
    registerUser
)

router.route("/login").post(
    loginUser
)

// temp

router.route("/uplode").post(
    userAuthOrNot,
    upload.single("catgory"),
    CreateCatagory
)

router.route("/ListCat").get(
    userAuthOrNot,
    GetListOfCatagorey
)
export const UserRoute = router