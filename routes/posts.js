const express = require('express')
const ROUTER = express.Router()
const { AuthUser } = require('../middleware/AuthUser')

const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postsController')

ROUTER.get('/', AuthUser, getAllPosts)
ROUTER.get('/:_id', AuthUser, getPost)
ROUTER.post('/new-post', AuthUser, createPost)
ROUTER.put('/edit-post/:_id', AuthUser, updatePost)
ROUTER.delete('/delete-post/:_id', AuthUser, deletePost)

module.exports = ROUTER
