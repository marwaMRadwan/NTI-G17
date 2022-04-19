const router = require("express").Router()
const auth = require("../app/middleware/auth")
const User = require("../app/controller/user.controller")
router.post('/register', User.register)
router.post('/login', User.login)
router.get('/all', auth, User.getAllUsers)
module.exports = router