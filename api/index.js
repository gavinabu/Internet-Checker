const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors({origin:"*"}))

app.get("/",(req,res) => {
  console.log(req)
  res.json({
    ip:req.ip,
    ips:req.ips,
    headers:req.headers,
    rawheaders:req.rawheaders,
  })
})

app.get("/getTime",(req,res) => {
  res.setHeader("Content-Type","text/plain")
  res.send(Date.now())
})


app.listen(80, () => {
  console.log("App running")
})