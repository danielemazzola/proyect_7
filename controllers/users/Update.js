const User = require('../../models/User')
const { NOT_USERS, UPDATE_USER, ERROR } = require('../utils_texts/messages')
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

module.exports = Update
