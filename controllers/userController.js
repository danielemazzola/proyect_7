const User = require('../models/User')
const bcrypt = require('bcrypt')
const { generateJWT } = require('../helpers/generateJWT')
const {
  USER,
  USERS,
  NOT_USERS,
  UPDATE_USER,
  DUPLICATE,
  CREATE_USER,
  USER_NOT_FOUND,
  PROBLEM_PASSWORD,
  UPDATE_NEW_ADMIN,
  FORBIDDEN,
  DELETE_USER,
  ERROR
} = require('../helpers/messages')

const Register = async (req, res) => {
  try {
    const { email } = req.body
    const duplicateUser = await User.findOne({ email })
    if (duplicateUser) return res.status(409).json({ message: DUPLICATE })
    const newUser = new User(req.body)
    await newUser.save()
    return res.status(201).json({ message: CREATE_USER, newUser })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

const Users = async (req, res) => {
  try {
    const users = await User.find()
    if (users.length === 0) return res.status(201).json({ message: NOT_USERS })
    if (users.length === 1)
      return res.status(201).json({ message: USER, users })
    else return res.status(201).json({ message: USERS, users })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

const Update = async (req, res) => {
  try {
    const { _id } = req.params
    const user = await User.findById(_id)
    if (!user) return res.status(404).json({ message: NOT_USERS })
    const updateUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true
    })
    return res.status(200).json({ message: UPDATE_USER, updateUser })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const existUser = await User.findOne({ email })
    if (!existUser) return res.status(404).json({ message: USER_NOT_FOUND })
    if (bcrypt.compareSync(password, existUser.password)) {
      const token = generateJWT(existUser._id)
      return res.status(200).json({ existUser, token })
    } else {
      return res.status(404).json({ message: PROBLEM_PASSWORD })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const changeRole = async (req, res) => {
  const { user } = req
  const { _id } = req.params
  try {
    const existUser = await User.findById(_id)
    if (!existUser) return res.status(404).json({ message: NOT_USERS })
    existUser.roles = ['admin']
    const updateNewAdmin = await existUser.save()
    return res.status(200).json({ message: UPDATE_NEW_ADMIN, updateNewAdmin })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const deleteUser = async (req, res) => {
  const { _id } = req.params
  const { user } = req
  try {
    //DELETE ONLY USER === USER
    if (_id.toString() === user._id.toString()) {
      const deleteUser = await User.findByIdAndDelete(_id)
      return res.status(200).json({ message: DELETE_USER, deleteUser })
    }
    //DELETE ONLY ADMIN !== USER
    const isAdmin = user.roles.filter((val) => val === 'admin')
    if (isAdmin.length) {
      const existUserDelete = await User.findByIdAndDelete(_id)
      if (!existUserDelete)
        return res.status(404).json({ message: USER_NOT_FOUND })
      else
        return res.status(200).json({ message: DELETE_USER, existUserDelete })
    } else {
      return res.status(403).json({ message: FORBIDDEN })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = { Users, Update, Register, Login, changeRole, deleteUser }
