const userModel = require('../../db/models/user.model')
class User {
    static index = async(req,res)=> {
        try{
            const users = await userModel.find()
            res.status(200).send({
                apiStatus:true,
                data: users,
                message:"data fetched successful"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:null,
                message:e.message    
            })
        }
    }
        
    static showSingle = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            res.status(200).send({
                apiStatus:true,
                data: user,
                message:"data fetched successful"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:null,
                message:e.message    
            })
        }

    }

    static add = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.status(200).send({
                apiStatus:true,
                data: userData,
                message:"data added"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:null,
                message:e.message    
            })
        }
    }

    static addAddr = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            user.addresses.push(req.body)
            await user.save()
            res.status(200).send({
                apiStatus:true,
                data: user,
                message:"data fetched successful"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:null,
                message:e.message    
            })

    }
    }
    static edit = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            console.log(`edit user ${user.name}`);
            res.render('edit',{
                pageTitle:`edit user ${user.name}`,
                user
        })
        }
        catch(e){
            res.send(e.message)
        }

    }

    static editLogic = async(req,res)=>{
        try{
            const user = await userModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/')
        }
        catch(e){
            res.send(e.message)
        }
    }
    static del = async(req,res)=>{
        try{
            const user = await userModel.findByIdAndDelete(req.params.id)
            res.redirect('/')
        }
        catch(e){
            res.send(e.message)
        }
    }
    

}
module.exports = User