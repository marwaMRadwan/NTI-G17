const express = require("express")
const path = require("path")
const hbs = require("hbs")
const taskController = require("../controllers/tasks")
const app = express()

const staticDir = path.join(__dirname, '../frontend/public')
const viewsDir = path.join(__dirname, '../frontend/views')
const layoutsDir = path.join(__dirname, '../frontend/layouts')

//use static directory
app.use(express.static(staticDir))
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(layoutsDir)

// app.get('/', (req,res)=>{
//     res.render('home', {
//         pageTitle:"home page",
//         siteName:"session5",
//         name:"marwa",
//         age:36
//     })
// })
// app.get('/p2', (req,res)=>{
//     user = {name:"marwa", age:36}
//     res.render('p2', {
//         pageTitle:"p2 page",
//         siteName:"session5",
//         user
//     })
// })
app.get("/", (req, res)=>{
    const tasks = taskController.showAll()
    res.render('allTasks', { pageTitle: "all Tasks", tasks })
})
app.get('/tasks/:id', (req,res)=>{
    // res.send({
    //     params:req.params,
    //     query: req.query
    // })
    const id = req.params.id
    const t = taskController.showSingle("id", id)
    res.render('single', {pageTitle:"single", t})
})
module.exports = app