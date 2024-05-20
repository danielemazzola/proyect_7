const express = require('express')
require('dotenv').config()
const CONNECTION = require('./configDB/connectDB')

//COONECT DDBB
CONNECTION()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Everything related to users
const users = require('./routes/users')
app.use('/api/users', users)

//Everything related to users
const services = require('./routes/services')
app.use('/api/services', services)

//Everything related to products
const contracted = require('./routes/contracted')
app.use('/api/contracted', contracted)

//ERRORS URI
app.get('*', (req, res, next) => {
  const ERROR = 'URL NOT FOUND🤦‍♂️'
  ERROR.status = 404
  next(ERROR)
})

app.use((error, req, res, next) => {
  return res.status(500).send(error)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running, port: ${PORT}`)
})
