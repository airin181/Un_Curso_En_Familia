const path = require('path')
const express = require('express')
const app = express()
const env = require("dotenv").config();

const port = process.env.PORT || 5000

const router = require("./routes/routes-vincula")
app.use("/api", router)


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
    