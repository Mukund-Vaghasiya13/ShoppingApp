import { loginUser, logout, registerUser } from "../Controllers/user.controller.js";
import { Router } from "express";
import { userAuthOrNot } from "../middleware/IsUSerAuthOrNot.js";

const router = Router()

router.route("/register").post(
    registerUser
)

router.route("/login").post(
    loginUser
)

router.route("/logout").post(
    userAuthOrNot,
    logout
)

export const UserRoute = router