import express from "express";
import { userRouter } from "./userRoutes.js";
import { adminRouter } from "./adminRoutes.js";

const router = express.Router();
router.use("/user",userRouter);
router.use("/admin",adminRouter);

export { router as indexRouter }