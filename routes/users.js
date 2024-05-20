const express = require('express')
const ROUTER = express.Router()
const AllUsers = require('../controllers/users/AllUsers')
const Register = require('../controllers/users/Register')
const Update = require('../controllers/users/Update')
const Login = require('../controllers/users/Login')

ROUTER.get('/', AllUsers)
ROUTER.post('/register', Register)
ROUTER.put('/update/:_id', Update)
ROUTER.post('/login', Login)

module.exports = ROUTER
