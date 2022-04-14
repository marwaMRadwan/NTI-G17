const router = require("express").Router()
const userController = require("../app/controller/user.controller")
router.get("/", userController.index)
router.get("/add", userController.add)
router.post("/add", userController.addLogic)
router.get("/single/:id", userController.showSingle)
module.exports = router