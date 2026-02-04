import express from "express";
import { connectDB } from "./confiq/db.js";
import { apiRouter } from "./routes/index.js";
const app = express();
const port = 4000;
connectDB();
app.get('/', (req, res) => {
  res.send("server is running")
})
app.use(express.json());

app.use('/api', apiRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
