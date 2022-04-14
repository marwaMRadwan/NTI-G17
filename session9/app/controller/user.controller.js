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
}
module.exports = User