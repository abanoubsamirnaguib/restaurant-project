require("dotenv").config()
require("../db/connectiondb")

const express = require("express");
const app = express();
const path = require("path")

const staticurl = path.join("../uploads")
app.use(express.static(staticurl))

const adminRoutes = require("../routes/admin/admin.routes")
const webRoutes = require("../routes/web/user.routes")


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/admin/", adminRoutes)
app.use("/web/", webRoutes)

app.get('*', (req,res)=> res.status(404).send({ 
    apiStatus: false, 
    message: "incorrect route" 
}))

// app.get("/", (req,res)=>{
//     res.send("test api")
// })

module.exports = app
