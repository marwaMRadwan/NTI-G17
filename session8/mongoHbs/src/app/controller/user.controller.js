const userHelper = require("../helper/user.helper")
class User{
    static addPost = (req,res)=>{
        res.render("addPost", {pageTitle:"add User (post)"})
    }
    static addPostLogic = (req,res)=>{
        const user = { ...req.body, id: Date.now(), addresses: [] }
        userHelper.add(user, (result)=>{
           // if(!added) res.render('add',{msg:"title used before"})
            res.redirect('/')
        })
    }
    static showAll = (req,res)=>{
        userHelper.showAll( users => {
            res.render("all", {
                pageTitle:"Show All Users",
                users,
                isEmpty: users.length==0? true:false
            })
        })
    }
    static showSingle = (req,res)=>{
        userHelper.showSingle(req.params.id, (e,user)=>{
            res.render("single", {
                pageTitle:"Show Single User",
                user,
                ifFound: user? true: false,
                hasAddr: user.addresses.length==0 ? false: true
            })    
        })
    }
    static editSingle = (req,res)=>{
        userHelper.showSingle(req.params.id, (e,user)=>{
            res.render("edit", {
            pageTitle:"Edit Single User",
            user,
            ifFound: user? true: false
        }) 
       })
    }
    static editLogic = (req,res)=>{
        userHelper.edit(req.params.id, req.body, (err, data)=>{
            data? res.redirect("/"): res.send('error on updating data')
        })
    }
    static delUser = (req,res)=>{
        userHelper.del(req.params.id, (err, data)=>{
            data? res.redirect("/"): res.send('error on deleting data')
        })
    }
    static addAddr = (req,res)=>{
        res.render("addAddr", {pageTitle:"add address"})
    }
    static addAddrLogic = (req,res)=>{
        const status = userHelper.addAddr(req.params.id, req.body)
        if(status) return res.redirect(`/single/${req.params.id}`)
        res.send("invalid user id")
    }
    static editAddr = (req,res)=>{
    const addrId = req.params.addrId
    const userId = req.params.userId
    const addr = userHelper.getAddressDetails(userId, addrId)
    res.render("editAddr", {addr})

    }
    static editAddrLogic = (req,res)=>{
        const addrId = req.params.addrId
        const userId = req.params.userId
        userHelper.editAddressLogic(userId, addrId, req.body)
        res.redirect(`/single/${userId}`)
    }
    static delAddr = (req,res)=>{
        const addrId = req.params.addrId
        const userId = req.params.userId
        userHelper.delAddr(userId, addrId)
        res.redirect(`/single/${userId}`)
    }
}
module.exports = User