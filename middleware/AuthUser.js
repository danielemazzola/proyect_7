const User = require('../models/User')
const { verifyToken } = require('../controllers/helpers/generateJWT')
const { UNAUTHORAIZED } = require('../controllers/utils_texts/messages')

const AuthUser = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json(UNAUTHORAIZED)
  try {
    const decode = verifyToken(token, process.env.JWT_KEY)
    req.user = await User.findById(decode.id)
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json(UNAUTHORAIZED)
  }
}

module.exports = { AuthUser }
