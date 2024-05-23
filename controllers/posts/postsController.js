const Post = require('../../models/Post')
const {
  ERROR,
  POST,
  NEW_POST,
  ALL_POSTS,
  NOT_EXIST_POST,
  UPDATE_POST,
  DELETE_POST,
  FORBIDDEN
} = require('../../helpers/messages')

const createPost = async (req, res) => {
  const { user } = req
  try {
    const newPost = new Post(req.body)
    newPost.idUser = user._id
    await newPost.save()
    return res.status(200).json({ message: NEW_POST, newPost })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

const getAllPosts = async (req, res) => {
  const { _id } = req.user
  try {
    const getAllPost = await Post.find().populate('idUser')
    return res.status(201).json({ message: ALL_POSTS, getAllPost })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

const getPost = async (req, res) => {
  const { _id } = req.params
  try {
    const existPost = await Post.findById(_id).populate('idUser')
    if (!existPost) return res.status(409).json({ message: NOT_EXIST_POST })
    return res.status(200).json({ message: POST, existPost })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

const updatePost = async (req, res) => {
  const { _id } = req.params
  const { user } = req
  try {
    const post = await Post.findById(_id)
    if (
      user.roles[0] === 'user' &&
      post.idUser.toString() !== user._id.toString()
    )
      return res.status(409).json({ message: FORBIDDEN })
    const existPost = await Post.findByIdAndUpdate(_id, req.body, { new: true })
    if (!existPost) return res.status(409).json({ message: NOT_EXIST_POST })
    return res.status(200).json({ message: UPDATE_POST, existPost })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

const deletePost = async (req, res) => {
  const { _id } = req.params
  const { user } = req

  try {
    const post = await Post.findById(_id)
    if (
      user.roles[0] === 'user' &&
      post.idUser.toString() !== user._id.toString()
    )
      return res.status(409).json({ message: FORBIDDEN })
    const existPost = await Post.findByIdAndDelete(_id)
    if (!existPost) return res.status(409).json({ message: NOT_EXIST_POST })
    return res.status(200).json({ message: DELETE_POST, existPost })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
}
