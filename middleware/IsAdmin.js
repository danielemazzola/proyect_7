const User = require('../models/User')
const IsAdmin = async (req, res, next) => {
  const { user } = req
  const isAdmin = user.roles.filter((val) => val === 'admin')
  try {
    if (isAdmin.length) {
      next()
    } else {
      return res
        .status(409)
        .json({ message: 'You don`t have permission to visit this url' })
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = { IsAdmin }
