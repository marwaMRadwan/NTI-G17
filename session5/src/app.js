const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()

const staticDir = path.join(__dirname, '../frontend/public')
const viewsDir = path.join(__dirname, '../frontend/views')
const layoutsDir = path.join(__dirname, '../frontend/layouts')

//use static directory
app.use(express.static(staticDir))
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(layoutsDir)

app.get('/', (req,res)=>{
    res.render('home')
})
module.exports = app