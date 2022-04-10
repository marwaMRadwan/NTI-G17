const userHelper = require("../helper/user.helper")
class User{
    static add = (req,res)=>{
        if(req.query.name&&req.query.email&&req.query.age&&req.query.password){
            const user = { ...req.query, id: Date.now(), addresses: [] }
            userHelper.add(user)
            return res.redirect('/')
        }
        res.render("add", {
                pageTitle:"Add New User"
        })
    }
    static addPost = (req,res)=>{
        res.render("addPost", {pageTitle:"add User (post)"})
    }
    static addPostLogic = (req,res)=>{
        const user = { ...req.body, id: Date.now(), addresses: [] }
        userHelper.add(user)
        return res.redirect('/')
    }
    static showAll = (req,res)=>{
        res.render("all", {
            pageTitle:"Show All Users"
        })
    }
    static showSingle = (req,res)=>{
        res.render("single", {
            pageTitle:"Show Single User"
        })
    }
    static editSingle = (req,res)=>{
        res.render("edit", {
            pageTitle:"Edit Single User"
        })
    }
    static delUser = (req,res)=>{
        res.send("delete user")
    }
}
//if we use static
module.exports = User


// constructor(name, age){
    //     console.log('hello')
    //     this.name=name
    // }
    // const userobj = new User("marwa", 36)
// module.exports = userobj
