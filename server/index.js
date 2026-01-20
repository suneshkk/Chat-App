import express from "express";
import { connectDB } from "./confiq/db.js";
import { apiRouter} from "./routes/index.js";
const app = express();
const port = 4000;
connectDB();


app.use('/api', apiRouter)
app.get('/',(req,res,next)=>{
req.json({message:'hello world'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
