import express from "express";

const router = express.Router();

router.post("/sign-in", (req, res, next) => { console.log("Admin Signed In") })
router.post("/log-in", (req, res, next) => {console.log("Admin Logged In") })
router.put("/update-admin", (req, res, next) => {console.log("Admin Updated") })
router.get("/check-admin", (req, res, next) => {console.log("Admin Checked") })
router.post("/log-out", (req, res, next) => {console.log("Admin Logged Out") })
router.get("/fetch-admin-profile", (req, res, next) => {console.log("Admin Profile Fetched") })
router.delete("/delete-account", (req, res, next) => {console.log("Admin Account Deleted") })

export { router as adminRouter }