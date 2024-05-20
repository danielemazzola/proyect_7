require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/User')
const Services = require('../models/Services')
const users = [
  {
    name: 'Daniele1',
    lastName: 'Mazzola1',
    email: 'correo1@correo.com',
    age: 38,
    phone: 777777778,
    password: 'Password-1'
  },
  {
    name: 'Daniele2',
    lastName: 'Mazzola2',
    email: 'correo2@correo.com',
    age: 39,
    phone: 777777779,
    password: 'Password-2'
  },
  {
    name: 'Daniele3',
    lastName: 'Mazzola3',
    email: 'correo3@correo.com',
    age: 40,
    phone: 777777780,
    password: 'Password-3'
  },
  {
    name: 'Daniele4',
    lastName: 'Mazzola4',
    email: 'correo4@correo.com',
    age: 41,
    phone: 777777781,
    password: 'Password-4'
  },
  {
    name: 'Daniele5',
    lastName: 'Mazzola5',
    email: 'correo5@correo.com',
    age: 42,
    phone: 777777782,
    password: 'Password-5'
  },
  {
    name: 'Daniele6',
    lastName: 'Mazzola6',
    email: 'correo6@correo.com',
    age: 43,
    phone: 777777783,
    password: 'Password-6'
  },
  {
    name: 'Daniele7',
    lastName: 'Mazzola7',
    email: 'correo7@correo.com',
    age: 44,
    phone: 777777784,
    password: 'Password-7'
  },
  {
    name: 'Daniele8',
    lastName: 'Mazzola8',
    email: 'correo8@correo.com',
    age: 45,
    phone: 777777785,
    password: 'Password-8'
  }
]
const services = [
  { serviceName: 'Debit card', code: 1 },
  { serviceName: 'Credit card', code: 2 }
]

mongoose
  .connect(process.env.URI_DB)
  .then(async () => {
    const allUser = await User.find()
    const allServices = await Services.find()
    if (allUser.length) await User.collection.drop()
    if (allServices.length) await Services.collection.drop()
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    for (const user of users) {
      const newUser = new User(user)
      await newUser.save()
    }
    await Services.insertMany(services)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  // Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect())
