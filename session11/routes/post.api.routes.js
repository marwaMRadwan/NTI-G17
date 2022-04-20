const router = require("express").Router()
const Post = require("../app/controller/post.controller")
const auth = require("../app/middleware/auth")
router.post('/add', auth, Post.addPost)
router.get('/myPosts', auth, Post.myPost)

module.exports = router