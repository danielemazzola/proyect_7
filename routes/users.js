const express = require('express')
const ROUTER = express.Router()
const { AuthUser } = require('../middleware/AuthUser')
const {
  Users,
  Update,
  Register,
  Login,
  changeRole,
  deleteUser
} = require('../controllers/userController')

ROUTER.get('/', Users)
ROUTER.post('/register', Register)
ROUTER.put('/update/:_id', AuthUser, Update)
ROUTER.post('/login', Login)
ROUTER.put('/modified-role/:_id', AuthUser, changeRole)
ROUTER.delete('/delete/:_id', AuthUser, deleteUser)

module.exports = ROUTER
