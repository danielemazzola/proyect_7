const bcrypt = require('bcrypt')
const User = require('../../models/User')
const {
  USER_NOT_FOUND,
  PROBLEM_PASSWORD,
  ERROR
} = require('../utils_texts/messages')
const { generateJWT } = require('../helpers/generateJWT')
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
module.exports = Login
