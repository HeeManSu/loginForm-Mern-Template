import express from "express"
import { getMyProfile, register, logout, login, forgetpassword, resetpassword } from "../controllers/userController.js";
import singleUpload from "../middlewares/multer.js"
import { isAuthenticated } from "../middlewares/auth.js";



const router = express.Router();


//To register a user
router.route("/register").post(singleUpload, register).get((req, res) => {
    res.send("This is my register page")
})

//To login a user
router.route("/login").post(login).get((req, res) => {
    res.send("This request is for login")
})


router.route("/me").get(isAuthenticated, getMyProfile).get((req, res) => {
    res.send("This is  me page")
})

//forget password
router.route("/forgetpassword").post(forgetpassword)

//reset password
router.route("/resetpassword/:token").put(resetpassword)


router.route("/logout").get(logout)


export default router;