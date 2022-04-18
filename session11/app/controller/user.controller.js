const userModel = require("../../database/models/user.model")
class User{
    static register = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
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
}
module.exports = User