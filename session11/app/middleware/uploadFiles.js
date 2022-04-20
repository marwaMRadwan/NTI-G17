const multer = require("multer")
const path = require("path")
const fs = require("fs")
//diskstorage
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const myLoc = path.join('uploads', req.user._id.toString())
        fs.mkdir(myLoc, ()=>{})
        cb(null, myLoc)
    },
    filename: function(req,file, cb){
        const myFileName = file.fieldname+"-"+Date.now()+path.extname(file.originalname)
        cb(null, myFileName)
    }
})
const upload= multer ({
    storage,
    limits:{fileSize:20000000},
    // fileFilter: function(req, file, cb){
    //     if(path.extname(file.originalname) != '.jpg') 
    //         return cb(new Error("invalid ext"))
    //     cb(null, true)
    // }
})

module.exports=upload