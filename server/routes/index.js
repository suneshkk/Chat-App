import express from "express";
import { indexRouter } from "./version1/index.js";
const router = express.Router();

router.use('/v1', indexRouter)

export { router as apiRouter }