const express = require('express')
const ROUTER = express.Router()
const AllServices = require('../controllers/services/AllServices')
const Create = require('../controllers/services/Create')
const Update = require('../controllers/services/Update')
const Delete = require('../controllers/services/Delete')

ROUTER.get('/', AllServices)
ROUTER.post('/create', Create)
ROUTER.put('/update/:_id', Update)
ROUTER.delete('/delete/:_id', Delete)

module.exports = ROUTER
