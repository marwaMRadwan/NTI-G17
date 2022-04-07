const fs = require("fs")
const writeDataToJSON = (fileName, data) => {
    try{
        fs.writeFileSync(`db/${fileName}`, JSON.stringify(data))
    }
    catch(e){
    }
}

const readDataFromJSON = (fileName) => {
    let data
    try{
        data = JSON.parse(fs.readFileSync(`db/${fileName}`))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data = []
    }
    return data
}

module.exports = {
    writeDataToJSON,
    readDataFromJSON
}