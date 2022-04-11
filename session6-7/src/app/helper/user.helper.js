const deal = require("./dealWithJSON.helper")
const fName = process.env.fileName
class User{
    static showAll = () =>{
        const users = deal.readDataFromJSON(fName)
        return users
    }
    static showSingle = (userId)=>{
        const users = deal.readDataFromJSON(fName)
        const data = users.find(u=> u.id==userId)
        return data
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
    static edit = (userId, newData) =>{
        try{
            const allUsers = deal.readDataFromJSON(fName)
            const userIndex = allUsers.findIndex(u=> u.id==userId)
            if(userIndex==-1) throw new Error()
            const user = {
                id:userId, 
                ...newData, 
                addresses: allUsers[userIndex].addresses
            }
            allUsers[userIndex] = user
            deal.writeDataToJSON(fName, allUsers)
            return true
        }
        catch(e){
            return false
        }
    }
    static del = (userId)=>{
    }    
}

module.exports = User
