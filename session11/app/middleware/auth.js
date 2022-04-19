const jwt = require('jsonwebtoken')
const User = require('../../database/models/user.model')
/*
get token from header
verify => _id
search db => _id, token
if !found => unauth
continue
*/
const auth = async(req,res, next) => {
    try{
        const token = req.header("Authorization").replace("bearer ", "")
        const decode = jwt.verify(token, process.env.JWTKEY)
        const user = await User.findOne({_id:decode._id, 'tokens.token':token})
        if(!user) throw new Error("user not found")
        req.user = user
        req.token = token
        next()
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"unauthorized",
            data:e.message
        })
    }
}

module.exports = auth