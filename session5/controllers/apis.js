const fetch = require("node-fetch")
const apiCall = async(apiUrl, cb)=>{
    try{
        const data = await (await fetch(apiUrl)).json()
        cb(data, null)
    }
    catch(e){
        cb(null, e.message)
    }
}
module.exports = apiCall