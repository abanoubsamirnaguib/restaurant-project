var express = require('express')
var cors = require('cors')
var app = express()
require("dotenv").config()
require("../db/connectiondb")
const path = require("path")

const staticurl = path.join(__dirname , "../uploads")
app.use('/uploads',express.static(staticurl))
// console.log(staticurl);
const userRoutes = require("../routes/web/user.routes")
const adminRoutes = require("../routes/admin/admin.routes")
const foodRoutes = require("../routes/admin/food.routes")


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(adminRoutes)
app.use(userRoutes)
app.use("/food",foodRoutes)

app.get('*', (req,res)=> res.status(404).send({ 
    apiStatus: false, 
    message: "incorrect route" 
}))

// app.get("/", (req,res)=>{
//     res.send("test api")
// })

module.exports = app
