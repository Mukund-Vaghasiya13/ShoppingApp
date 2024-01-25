import { Router } from "express";
import { CreateCatagory, ProductUplodeInCatagory, deleteCatagory, DeleteSingleProduct } from "../Controllers/Admin.controller.js";
import { userAuthOrNot } from "../middleware/IsUSerAuthOrNot.js";
import { upload } from "../middleware/uplodeimage.js";


const router = Router()


router.route("/Create/Catagory").post(
    userAuthOrNot,
    upload.single("catgory"),
    CreateCatagory
)

router.route("/Create/Product").post(
    userAuthOrNot,
    upload.single("product"),
    ProductUplodeInCatagory
)


router.route("/Catagory/Delete").post(
    userAuthOrNot,
    deleteCatagory
)

router.route("/Catagory/Product/Delete").post(
    userAuthOrNot,
    DeleteSingleProduct
)


export default router