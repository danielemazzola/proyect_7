const express = require('express')
const ROUTER = express.Router()
const { AuthUser } = require('../middleware/AuthUser')
const {
  Users,
  Update,
  Register,
  Login
} = require('../controllers/users/userController')

ROUTER.get('/', Users)
ROUTER.post('/register', Register)
ROUTER.put('/update/:_id', AuthUser, Update)
ROUTER.post('/login', Login)

module.exports = ROUTER
