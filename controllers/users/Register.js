const User = require('../../models/User')
const {
  ERROR,
  DUPLICATE,
  CREATE_USER
} = require('../../helpers/texts/messages')
const Register = async (req, res) => {
  try {
    const { email } = req.body
    const duplicateUser = await User.findOne({ email })
    if (duplicateUser) return res.status(409).json({ message: DUPLICATE })
    const newUser = new User(req.body)
    await newUser.save()
    res.status(201).json({ message: CREATE_USER, newUser })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = Register
