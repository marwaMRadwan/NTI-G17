const async = require('hbs/lib/async')
const userModel = require('../../db/models/user.model')
class User {
    static index = async(req,res)=> {
        try{
            const users = await userModel.find()

            res.render('all',{
                pageTitle:"all users",
                users,
                isEmpty:!users.length
        })
        }
        catch(e){
            res.send(e.message)
        }
    }

    static add = (req,res) => res.render("add", {pageTitle:"add user"})

    static addLogic = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.redirect("/")
        }
        catch(e){
            let errors = {}
            if(e.errors){
            Object.keys(e.errors).forEach(err=>{
                errors[err] = e.errors[err].message
            })
            if(req.body.gender=="male") req.body.gender=true
            else req.body.gender=false
            // if(req.body.gender=="male") req.body.male=true
            // else if(req.body.gender=="female")req.body.female=true
        }
        else errors.email="email used before"
            res.render('add', {
                pageTitle:"add user", 
                errors, 
                userData:req.body
            })
        }
    }
    static showSingle = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            res.render('single',{
                pageTitle:"all users",
                user
        })
        }
        catch(e){
            res.send(e.message)
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
    static addAddr = async(req,res)=>{
        res.render('addAddr')
    }
    static addAddrLogic = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            user.addresses.push(req.body)
            await user.save()
            res.redirect(`/single/${req.params.id}`)
        }
        catch(e){
            res.send(e.message)
        }

    }

}
module.exports = User