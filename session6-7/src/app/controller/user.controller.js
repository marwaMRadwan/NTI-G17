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
        const users = userHelper.showAll()
        res.render("all", {
            pageTitle:"Show All Users",
            users,
            isEmpty: users.length==0? true:false
        })
    }
    static showSingle = (req,res)=>{
        const user = userHelper.showSingle(req.params.id)
        res.render("single", {
            pageTitle:"Show Single User",
            user,
            ifFound: user? true: false,
            hasAddr: user.addresses.length==0 ? false: true
        })
    }
    static editSingle = (req,res)=>{
        const user = userHelper.showSingle(req.params.id)
        res.render("edit", {
            pageTitle:"Edit Single User",
            user,
            ifFound: user? true: false
        })    }
    static editLogic = (req,res)=>{
        const isUpdated = userHelper.edit(req.params.id, req.body)
        if(isUpdated) res.redirect('/')
        else res.send("error in update")
    }

    static delUser = (req,res)=>{
        const isDeleted = userHelper.del(req.params.id)
        isDeleted? res.redirect("/"): res.send('error on deleting data')
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
