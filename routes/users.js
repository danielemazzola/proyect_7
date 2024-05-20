const express = require('express')
const ROUTER = express.Router()
const { AuthUser } = require('../middleware/AuthUser')
const AllUsers = require('../controllers/users/AllUsers')
const Register = require('../controllers/users/Register')
const Update = require('../controllers/users/Update')
const Login = require('../controllers/users/Login')

ROUTER.get('/', AllUsers)
ROUTER.post('/register', Register)
ROUTER.put('/update/:_id', AuthUser, Update)
ROUTER.post('/login', Login)

module.exports = ROUTER
