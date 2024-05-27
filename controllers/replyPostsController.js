const ReplyPost = require('../models/ReplyPost')
const Post = require('../models/Post')
const {
  ERROR,
  NOT_EXIST_POST,
  FORBIDDEN,
  NEW_REPLY,
  ALL_REPLIES,
  NOT_EXIST_REPLY,
  REPLY,
  UPDATE_REPLY,
  DELETE_REPLY
} = require('../helpers/messages')

const createReply = async (req, res) => {
  const { _id } = req.params
  const { user } = req
  try {
    const existPost = await Post.findById(_id)
    if (!existPost) return res.status(409).json({ message: NOT_EXIST_POST })
    const newReply = new ReplyPost(req.body)
    newReply.idPost = _id
    newReply.idUser = user._id
    const saveReply = await newReply.save()
    return res.status(200).json({ message: NEW_REPLY, saveReply })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const getAllReplies = async (req, res) => {
  try {
    const getAllReplies = await ReplyPost.find()
      .populate('idPost')
      .populate('idUser')
    return res.status(201).json({ message: ALL_REPLIES, getAllReplies })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const getReply = async (req, res) => {
  const { _id } = req.params
  try {
    const existReply = await ReplyPost.findById(_id)
      .populate('idPost')
      .populate('idUser')
    if (!existReply) return res.status(409).json({ message: NOT_EXIST_REPLY })
    return res.status(200).json({ message: REPLY, existReply })
  } catch (error) {}
}
const updateReply = async (req, res) => {
  const { _id } = req.params
  const { user } = req
  try {
    const reply = await ReplyPost.findById(_id)
    if (!reply) return res.status(409).json({ message: NOT_EXIST_REPLY })
    const isUser = user.roles.filter((val) => val === 'user')
    if (isUser.length && reply.idUser.toString() !== user._id.toString())
      return res.status(409).json({ message: FORBIDDEN })
    const existReply = await ReplyPost.findByIdAndUpdate(_id, req.body, {
      new: true
    })
    if (!existReply) return res.status(409).json({ message: NOT_EXIST_REPLY })
    return res.status(200).json({ message: UPDATE_REPLY, existReply })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const deleteReply = async (req, res) => {
  const { _id } = req.params
  const { user } = req
  try {
    const reply = await ReplyPost.findById(_id)
    if (!reply) return res.status(409).json({ message: NOT_EXIST_REPLY })
    const isUser = user.roles.filter((val) => val === 'user')
    if (isUser.length && reply.idUser.toString() !== user._id.toString())
      return res.status(409).json({ message: FORBIDDEN })
    const existReply = await ReplyPost.findByIdAndDelete(_id)
    if (!existReply) return res.status(409).json({ message: NOT_EXIST_REPLY })
    return res.status(200).json({ message: DELETE_REPLY, existReply })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = {
  getAllReplies,
  getReply,
  createReply,
  updateReply,
  deleteReply
}
