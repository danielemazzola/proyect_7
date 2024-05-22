const User = require('../../models/User')
const {
  USER,
  USERS,
  NOT_USERS,
  ERROR
} = require('../../helpers/texts/messages')
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

module.exports = Users
