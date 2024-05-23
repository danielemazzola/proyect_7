const express = require('express')
const ROUTER = express.Router()
const { AuthUser } = require('../middleware/AuthUser')

const {
  getAllReplies,
  getReply,
  createReply,
  updateReply,
  deleteReply
} = require('../controllers/replyPosts/replyPostsController')

ROUTER.get('/', AuthUser, getAllReplies)
ROUTER.get('/:_id', AuthUser, getReply)
ROUTER.post('/new-reply', AuthUser, createReply)
ROUTER.put('/edit-reply/:_id', AuthUser, updateReply)
ROUTER.delete('/delete-reply/:_id', AuthUser, deleteReply)

module.exports = ROUTER
