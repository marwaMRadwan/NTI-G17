const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const userSchema = mongoose.Schema({
    fname:{
        type:String, 
        required:true, 
        trim:true
    }, 
    lname:{
        type:String, 
        required:true, 
        trim:true
    }, 
    dob:{
        type:Date, 
        max:Date.now()
    },
    phone:{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG']))
                throw new Error("invalid phone format")
        }
    },
    status:{
        type:Boolean, 
        default:false
    },
    email:{
        type:String, 
        required:true, 
        trim:true, 
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    },
    password:{
        type:String, 
        required:true, 
        trim:true
    }, 
    pImage:{
        type:String
    }
}, {
    timestamps:true  //createdAt, updatedAt
})

userSchema.pre('save', async function(){
    // console.log(this)
    const data = this
    if(data.isModified("password"))
        data.password = await bcryptjs.hash(data.password, 15)
})
const User = mongoose.model("User", userSchema)
module.exports = User