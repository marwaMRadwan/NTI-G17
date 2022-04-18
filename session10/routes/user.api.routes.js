const router = require("express").Router()
const userController = require("../app/controller/users.api.controller")

router.get("/users", userController.index)
router.get("/users/:id", userController.showSingle)

router.post("/add", userController.add)
router.post("/addAddr/:id", userController.addAddr) //put

router.put("/users/:id", userController.edit)

router.delete("/users/:id", userController.del)
module.exports = router