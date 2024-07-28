const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors({origin:"*"}))

app.get("/",(req,res) => {
  console.log(req)
  res.json({
    ip:req.headers["x-real-ip"],
    rawIp:req.ip,
    serverTime:Date.now(),
    timeZone:req.headers["x-vercel-ip-timezone"],
    useragents:req.headers["user-agent"],
    platform:req.headers["Sec-Ch-Ua-Platform"],
    headers:req.headers,
  })
})

app.get("/getTime",(req,res) => {
  res.setHeader("Content-Type","text/plain")
  res.send(Date.now())
})

app.use((req,res) => {
  res.setHeader("Content-Type","text/plain")
  res.send("Error 404")
})

app.listen(80, () => {
  console.log("App running")
})