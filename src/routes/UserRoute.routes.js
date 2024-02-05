import { GetListOfCatagorey ,GetProductList } from "../Controllers/UserAndAdmin.controller.js";
import { Router } from "express";
import { userAuthOrNot } from "../middleware/IsUSerAuthOrNot.js";

const router = Router()

router.route("/GetCatagory").get(
    userAuthOrNot,
    GetListOfCatagorey
)


router.route("/GetProduct").get(
    userAuthOrNot,
    GetProductList
)


export const UserAdmin = router




