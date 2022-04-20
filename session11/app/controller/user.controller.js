const userModel = require("../../database/models/user.model")
const sendEmailMe = require("../helper/sendEmail.helper")
const path = require("path")
const fs = require("fs")
class User{
    static register = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            sendEmailMe(userData.email)
            res.status(200).send({
                apiStatus:true,
                data: userData,
                message:"registered"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static getAllUsers = async(req,res)=>{
        try{
            const users = await userModel.find()         
            res.status(200).send({
                apiStatus:true,
                data: users,
                message:"registered"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
    }

    }
    static login = async(req, res)=>{
        try{
            const userData = await userModel.login(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.status(200).send({
                apiStatus:true,
                data: {user:userData , token},
                message:"registered"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
    }


    }
    static me = async(req,res)=>{
        res.status(200).send({
            apiStatus:true,
            data: req.user
        })
    }
    static logout = async(req, res)=>{
        try{
            req.user.tokens= req.user.token.filter(t=>{
                return t.token != req.token
            })
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                message:e.message
            })


    }
}
    static logoutAll = async(req, res)=>{
        try{
            req.user.tokens=[]
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                message:e.message
            })

    }
}
static uploadImage = async  (req, res) => {
    const imgDir = path.join(__dirname, `../../${req.file.path}`)
    const newPath = `${imgDir}${path.extname(req.file.originalname)}`
    fs.rename(imgDir, newPath , ()=>{})
    req.user.pImage= `${req.file.path}${path.extname(req.file.originalname)}`
    await req.user.save()
    res.send({
        user: req.user
    })
}
static uploadImage1 = async  (req, res) => {
    req.user.pImage= `${req.file.path}`
    await req.user.save()
    res.send({
        user: req.user
    })
}

}
module.exports = User