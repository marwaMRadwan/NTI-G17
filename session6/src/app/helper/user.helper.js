const deal = require("./dealWithJSON.helper")
const fName = process.env.fileName
class User{
    static showAll = () =>{
    }
    static showSingle = (userId)=>{
    }
    static add = (data) =>{
        try{
            const allUsers = deal.readDataFromJSON(fName)
            allUsers.push(data)
            deal.writeDataToJSON(fName, allUsers)
            return true   
        }
        catch(e){
            return false
        }
    }
    static edit = (userId) =>{
    }
    static del = (userId)=>{
    }    
}

module.exports = User
