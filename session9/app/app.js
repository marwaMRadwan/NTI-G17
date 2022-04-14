const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

require('../db/conn')
const userRoutes = require("../routes/user.routes")

app.use(express.urlencoded({extended:true}))
// app.use(express.json())   //for apis
app.use(express.static(path.join(__dirname, "../resources/public")))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../resources/views"))
hbs.registerPartials(path.join(__dirname, "../resources/layouts"))

app.use(userRoutes)
app.get("*", (req,res)=> res.send("page not found"))
module.exports = app