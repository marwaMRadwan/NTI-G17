const router = require('express').Router()
const userControl = require("../app/controller/user.controller")

router.get("/", userControl.showAll)
router.get("/add", userControl.add)
router.get("/addPost", userControl.addPost)
router.post("/addPost", userControl.addPostLogic)
router.get("/edit/:id", userControl.editSingle)
router.post("/edit/:id", userControl.editLogic)
router.get("/single/:id", userControl.showSingle)
router.get("/del/:id", userControl.delUser)
router.get("/addAddr/:id", userControl.addAddr)
router.post("/addAddr/:id", userControl.addAddrLogic)

module.exports = router