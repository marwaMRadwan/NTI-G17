const router = require("express").Router()
const userController = require("../app/controller/user.controller")
router.get("/", userController.index)
router.get("/add", userController.add)
router.post("/add", userController.addLogic)
module.exports = router