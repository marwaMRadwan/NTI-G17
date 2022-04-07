const express = require("express")
const path = require("path")
const app = express()
const staticDir = path.join(__dirname, '../frontend/public')
//use static directory
app.use(express.static(staticDir))
app.set('view engine', 'hbs')
app.get('/', (req,res)=>{
    res.render('home')
})
module.exports = app