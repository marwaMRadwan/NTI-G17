const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express()

app.use(express.urlencoded({extended:true}))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, 'resources/views'))

hbs.registerPartials(path.join(__dirname, 'resources/layouts'))

app.use(express.static(path.join(__dirname, 'public')))

const userRoutes = require("./routes/user.routes")
app.use(userRoutes)

app.get("*", (req, res)=> res.render('err404', {pageTitle: "Page Not Found"}))

module.exports = app
