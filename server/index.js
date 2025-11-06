import express from "express"
import { connectDB } from "./db.js"
const app = express()
const port = 4000
connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
