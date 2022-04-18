const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fname:{
        type:String, required:true, trim:true
    }, 
    lname:{
        type:String, required:true, trim:true
    }, 
    dob:{
        type:Date, max:Date.now()
    },
    status:{
        type:Boolean, default:false
    },
    email:{
        type:String, required:true, trim:true, unique:true
    },
    password:{
        type:String, required:true, trim:true
    }, 
    pImage:{
        type:String
    }
}, {
    timestamps:true  //createdAt, updatedAt
})

const User = mongoose.model("User", userSchema)
module.exports = User