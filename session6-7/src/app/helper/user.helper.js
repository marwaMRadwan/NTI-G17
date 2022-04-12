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
        data.addresses.forEach((addr, i)=>{
            addr.userId=userId,
            addr.id = i
        })
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
        try{
            const allUsers = deal.readDataFromJSON(fName)
            const userIndex = allUsers.findIndex(u=> u.id==userId)
            if(userIndex==-1) throw new Error()
            allUsers.splice(userIndex,1)
            deal.writeDataToJSON(fName, allUsers)
            return true
        }
        catch(e){
            return false
        }

    }    
    static addAddr=(userId, data) =>{
        try{
            const allUsers = deal.readDataFromJSON(fName)
            const userIndex = allUsers.findIndex(u=> u.id==userId)
            if(userIndex==-1) throw new Error()
            allUsers[userIndex].addresses.push(data)
            deal.writeDataToJSON(fName, allUsers)
            return true
        }
        catch(e){
            return false
        }
    }
    static getAddressDetails = (userId, addrId)=>{
        try{
            const allUsers = deal.readDataFromJSON(fName)
            const userIndex = allUsers.findIndex(u=> u.id==userId)
            if(userIndex==-1) throw new Error()
            return allUsers[userIndex].addresses[addrId]
        }
        catch(e){
            return false
        }
    }
    static editAddressLogic = (userId, addrId,data) =>{
        try{
            const allUsers = deal.readDataFromJSON(fName)
            const userIndex = allUsers.findIndex(u=> u.id==userId)
            if(userIndex==-1) throw new Error()
            console.log(data)
            allUsers[userIndex].addresses[addrId]= data
            deal.writeDataToJSON(fName, allUsers)
            return true
        }
        catch(e){
            return false
        }
    }
    static delAddr(userId, addrId){
        try{
            const allUsers = deal.readDataFromJSON(fName)
            const userIndex = allUsers.findIndex(u=> u.id==userId)
            if(userIndex==-1) throw new Error()
            allUsers[userIndex].addresses.splice(addrId,1)
            deal.writeDataToJSON(fName, allUsers)
            return true
        }
        catch(e){
            return false
        }

    }
}

module.exports = User
