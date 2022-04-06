const https = require("https")
const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=10"
// const req = https.request(apiURL, (res)=>{
//     let allRes = ""
//     res.on('data', (d)=> allRes += d.toString())
//     res.on('end', ()=> console.log(JSON.parse(allRes)))
// })
// req.on('error', (err)=> console.log(err))
// req.end()

const fetch = require('node-fetch');
const x = async()=>{
    // const response = await fetch(apiURL);
    const data = await (await fetch(apiURL)).json();
    console.log(data);
}
x()
