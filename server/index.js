import express from "express";
import { connectDB } from "./confiq/db.js";
const app = express();
const port = 4000;
connectDB();

app.get('/',(req,res,next)=>{
req.json({message:'hello world'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
