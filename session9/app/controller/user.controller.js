const userModel = require('../../db/models/user.model')
class User {
    static index = (req,res)=> res.send("test")

    static add = (req,res) => res.render("add", {pageTitle:"add user"})

    static addLogic = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.redirect("/")
        }
        catch(e){
            let errors = {}
            Object.keys(e.errors).forEach(err=>{
                errors[err] = e.errors[err].message
            })
            if(req.body.gender=="male") req.body.gender=true
            else req.body.gender=false
            res.render('add', {
                pageTitle:"add user", 
                errors, 
                userData:req.body
            })
        }
    }
}
module.exports = User