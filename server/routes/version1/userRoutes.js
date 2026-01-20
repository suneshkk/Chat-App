import express from "express";
import { userSignUp } from "../../controllers/userControllers.js";
const router = express.Router();

router.post("/sign-up",userSignUp
    
)
router.post("/log-in", (req,res,next) => {console.log("User Logged In")})
router.get("/fetch-user-profile", (req,res,next) => {console.log("User Profile Fetched")})
router.put("/profile-update", (req,res,next) => {console.log("User Profile Updated")})
router.delete("/account-delete", (req,res,next) => {console.log("User Account Deleted")})
router.post("/log-out", (req,res,next) => {console.log("User Logged Out")})
router.get("/check-user", (req,res,next) => {console.log("User Checked")})

export { router as userRouter }