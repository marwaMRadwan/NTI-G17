const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
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
    },
    tokens : [
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
}, {
    timestamps:true  //createdAt, updatedAt
})

userSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data.password
    delete data.__v
    delete data.tokens
    return data
}

userSchema.pre('save', async function(){
    // console.log(this)
    const data = this
    if(data.isModified("password"))
        data.password = await bcryptjs.hash(data.password, 15)
})

userSchema.statics.login = async(email, password) =>{
    const user = await User.findOne({email})
    if(!user) throw new Error("invalid email")
    const matched = await bcryptjs.compare(password, user.password)
    if(!matched) throw new Error("invalid password")
    return user
}
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id}, process.env.JWTKEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
const User = mongoose.model("User", userSchema)
module.exports = User