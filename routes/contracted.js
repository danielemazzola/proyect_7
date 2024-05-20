const express = require('express')
const ROUTER = express.Router()
const { AuthUser } = require('../middleware/AuthUser')
const { AllContracted } = require('../controllers/contracted/AllContracted')
const NewContract = require('../controllers/contracted/NewContract')

ROUTER.get('/', AuthUser, AllContracted)
ROUTER.post('/new-contract', AuthUser, NewContract)

module.exports = ROUTER
