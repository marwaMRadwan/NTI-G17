const con = require("../../../db/dbConnect")
const ObjectId = require("mongodb").ObjectId
class User{
    static showAll = (cb) =>{
        con( ( error, db ) => {
            if(error) return false
            db.collection('user').find().toArray( (e,data) => cb(data) )
        })
    }
    static showSingle = (userId, cb)=>{
        con( ( error, db ) => {
            if(error) return false
            db.collection('user').findOne({_id:new ObjectId(userId)},
            (e, data)=>{
                data.addresses.forEach((addr, i)=>{
                    addr.userId=userId,
                    addr.id = i
                })
                cb(false, data)
            })
        })
    }
    static add = (data, cb) =>{
        con( ( error, db ) => {
            if(db) 
                db.collection('user').insertOne(data, (err, result)=>{
                    cb(result)
                })
        })
    }
    static del = (userId, cb)=>{
        try{
            const userIdObj =new ObjectId(userId)
            con((err,db)=>{
                if(err) return cb(err, false)
                db.collection('user')
                .deleteOne({_id:userIdObj})
                .then(cb(false, true))
                .catch(e=>cb(e, false))
            })
        }
        catch(er){
            cb(er, false)
        }
    }    
    static edit = (userId, newData, cb) =>{
        try{
            const userIdObj =new ObjectId(userId)
            con((err,db)=>{
                if(err) return cb(err, false)
                db.collection('user')
                .updateOne(
                    {_id:userIdObj},
                    {$set: newData}
                )
                .then(cb(false, true))
                .catch(e=>cb(e, false))
            })
        }
        catch(er){
            cb(er, false)
        }
    }
    static addAddr=(userId, data) =>{
        // try{
        //     const allUsers = deal.readDataFromJSON(fName)
        //     const userIndex = allUsers.findIndex(u=> u.id==userId)
        //     if(userIndex==-1) throw new Error()
        //     allUsers[userIndex].addresses.push(data)
        //     deal.writeDataToJSON(fName, allUsers)
        //     return true
        // }
        // catch(e){
        //     return false
        // }
    }
    static getAddressDetails = (userId, addrId)=>{
        // try{
        //     const allUsers = deal.readDataFromJSON(fName)
        //     const userIndex = allUsers.findIndex(u=> u.id==userId)
        //     if(userIndex==-1) throw new Error()
        //     return allUsers[userIndex].addresses[addrId]
        // }
        // catch(e){
        //     return false
        // }
    }
    static editAddressLogic = (userId, addrId,data) =>{
        // try{
        //     const allUsers = deal.readDataFromJSON(fName)
        //     const userIndex = allUsers.findIndex(u=> u.id==userId)
        //     if(userIndex==-1) throw new Error()
        //     console.log(data)
        //     allUsers[userIndex].addresses[addrId]= data
        //     deal.writeDataToJSON(fName, allUsers)
        //     return true
        // }
        // catch(e){
        //     return false
        // }
    }
    static delAddr(userId, addrId){
        // try{
        //     const allUsers = deal.readDataFromJSON(fName)
        //     const userIndex = allUsers.findIndex(u=> u.id==userId)
        //     if(userIndex==-1) throw new Error()
        //     allUsers[userIndex].addresses.splice(addrId,1)
        //     deal.writeDataToJSON(fName, allUsers)
        //     return true
        // }
        // catch(e){
        //     return false
        // }

    }
}

module.exports = User
