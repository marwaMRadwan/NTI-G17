const mongoose=require("mongoose")
const validator = require("validator")
const User = mongoose.model('User', {
    name:{
        type: String,
        trim:true,
        lowercase:true,
        required:[true,"name is required"],
        minlength:[3, "name must be more than 3 chars"],
        maxlength:[20, "name must be less than 20 chars"]
    },
    age:{
        type: Number,
        min:21,
        max:60,
        default:21
    },
    password:{
        type: String,
        trim:true, 
        minlength:6,
        maxlength:20,
        match:/^(?=.*[0-9])(?=.*[a-z])/,
        validate(value){
            if(value.includes(this.name) || value.includes("password")) throw new Error("password can not contain your name or keyword password")
        }
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    },
    gender:{
        type: String,
        required:true,
        trim:true,
        lowercase:true,
        enum:['male', 'female']
    },
    status:{
        type: Boolean,
        default:false
    },
    image:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports = User