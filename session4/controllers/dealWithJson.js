const fs = require("fs")
const chalk = require("chalk")
const writeDataToJSON = (fileName, data) => {
    try{
        fs.writeFileSync(`db/${fileName}`, JSON.stringify(data))
        console.log(chalk.green(`data added to file ${fileName}`));
    }
    catch(e){
        console.log(chalk.red("File Reseted"))
    }
}

const readDataFromJSON = (fileName) => {
    let data
    try{
        data = JSON.parse(fs.readFileSync(`db/${fileName}`))
        if(!Array.isArray(data)) throw new Error()
        console.log(chalk.green('data fetched'));
    }
    catch(e){
        data = []
        console.log(chalk.red("error in reading data"))
    }
    return data
}

module.exports = {
    writeDataToJSON,
    readDataFromJSON
}