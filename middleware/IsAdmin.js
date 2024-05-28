const { roleIsAdmin } = require('../helpers/roleIsAdmin')
const User = require('../models/User')

const IsAdmin = async (req, res, next) => {
  const { user } = req
  try {
    if (roleIsAdmin(user) > 0) {
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

const Authority = async (req, res, next) => {
  const { _id } = req.params
  const { user } = req
  try {
    if (_id.toString() === user._id.toString() || roleIsAdmin(user) > 0) {
      next()
    } else {
      return res
        .status(409)
        .json({ message: 'You don`t have permission to delete others users' })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { IsAdmin, Authority }
