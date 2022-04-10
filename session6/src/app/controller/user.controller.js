class User{
    static add = (req,res)=>{
        res.render("add", {
            pageTitle:"Add New User"
        })
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
