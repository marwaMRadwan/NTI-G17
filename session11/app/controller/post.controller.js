const postModel = require("../../database/models/post.model")
class Post{
    static addPost = async(req,res)=>{
        try{
            const newPost = new postModel({
                ...req.body,
                userId: req.user._id
            })
            await newPost.save()
            res.status(200).send({data: newPost})
        }
        catch(e){
            res.status(500).send({
                data:e
            })
        }
    }
    static myPost = async(req,res)=>{
        try{
            await req.user.populate('myPosts')
            res.status(200).send({
                data:req.user.myPosts
            })
        }
        catch(e){
            res.status(500).send({data:e})
        }
    }
}
module.exports = Post