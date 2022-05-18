const express = require('express')
const app = express()
const env = require("dotenv").config();

const port = 5000
const router = require("./routes/routes-vincula")
app.use("/", router)




app.listen(port, () => {
    console.log(`Example app listening at ${process.env.URL}`)
    })
    