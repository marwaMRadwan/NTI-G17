//npm i -g nodemon
// npm i express
const express = require("express")
const app = express()
const PORT = 3000
app.use(express.static(`${__dirname}/static`))
app.get('/', (req, res)=>{
    res.send("hello from express")
})
app.get('/all', (req,res)=>{
    res.send("<h3>hello</h3>")
})
app.get('/allData', (req,res)=>{
    const data = [ {name:"marwa", age:36}, {name:"ahmed", age:25} ]
    res.send(data)
})
app.get("/html", (req,res)=>{
    myfile = `${__dirname}/a.html`
    res.sendFile(myfile)
})
//wild card
app.get("*", (req,res)=>{
    res.send("page not found")
})

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))