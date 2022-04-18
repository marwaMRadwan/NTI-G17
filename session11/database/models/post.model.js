const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    type:{
        type:String, 
        required:true, 
        trim:true,
        enum:["txt", "img", "vid"]
    },
    txt:{
        type:String, 
        required: function(){return this.type=="txt"}, 
        trim:true
    },
    file:{
        type:String, 
        required: function(){
            return this.type=="img"|| this.type=="vid"
        }, 
        trim:true
    }
}
, {
    timestamps:true  //createdAt, updatedAt
}
)

const Post = mongoose.model("Post", postSchema)
module.exports = Post