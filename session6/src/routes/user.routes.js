const router = require('express').Router()
const userControl = require("../app/controller/user.controller")

router.get("/", userControl.showAll)
router.get("/add", userControl.add)
router.get("/edit/:id", userControl.editSingle)
router.get("/single/:id", userControl.showSingle)
router.get("/del/:id", userControl.delUser)

module.exports = router