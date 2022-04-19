const router = require("express").Router()
const auth = require("../app/middleware/auth")
const User = require("../app/controller/user.controller")
router.post('/register', User.register)
router.post('/login', User.login)
router.get('/all', auth, User.getAllUsers)
router.get('/me', auth, User.me)
router.get('/logout', auth, User.logout)
router.get('/logoutAll', auth, User.logoutAll)

module.exports = router