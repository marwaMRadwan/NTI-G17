const router = require("express").Router()
const userController = require("../app/controller/user.controller")
router.get("/", userController.index)
router.get("/add", userController.add)
router.post("/add", userController.addLogic)
router.get("/single/:id", userController.showSingle)
router.get("/edit/:id", userController.edit)
router.post("/edit/:id", userController.editLogic)
router.get("/del/:id", userController.del)
router.get("/addAddr/:id", userController.addAddr)
router.post("/addAddr/:id", userController.addAddrLogic)

module.exports = router