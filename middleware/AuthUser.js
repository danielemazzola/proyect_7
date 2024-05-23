const User = require('../models/User')
const { verifyToken } = require('../helpers/generateJWT')
const { UNAUTHORAIZED, AUTHORIZATION_ERROR } = require('../helpers/messages')

const AuthUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ message: UNAUTHORAIZED })
  try {
    const decode = verifyToken(token, process.env.JWT_KEY)
    if (req.user === null)
      return res.status(401).json({ message: AUTHORIZATION_ERROR })
    req.user = await User.findById(decode.id)
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: UNAUTHORAIZED })
  }
}

module.exports = { AuthUser }
