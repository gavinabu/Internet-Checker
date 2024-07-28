const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors({origin:"*"}))

app.get("/",(req,res) => {
  res.json(req)
})

app.get("/getTime",(req,res) => {
  res.send(Date.now())
})


app.listen(80, () => {
  console.log("App running")
})