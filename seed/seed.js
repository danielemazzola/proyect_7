require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/User')
const users = [
  {
    name: 'Daniele1',
    lastName: 'Mazzola1',
    email: 'correo1@correo.com',
    age: 38,
    phone: 777777778,
    password: 'Password-1',
    roles: ['user']
  },
  {
    name: 'Daniele2',
    lastName: 'Mazzola2',
    email: 'correo2@correo.com',
    age: 28,
    phone: 777777779,
    password: 'Password-2',
    roles: ['admin']
  },
  {
    name: 'Daniele3',
    lastName: 'Mazzola3',
    email: 'correo3@correo.com',
    age: 48,
    phone: 777777770,
    password: 'Password-3',
    roles: ['user']
  },
  {
    name: 'Daniele4',
    lastName: 'Mazzola4',
    email: 'correo4@correo.com',
    age: 35,
    phone: 777777771,
    password: 'Password-4',
    roles: ['admin']
  },
  {
    name: 'Daniele5',
    lastName: 'Mazzola5',
    email: 'correo5@correo.com',
    age: 22,
    phone: 777777772,
    password: 'Password-5',
    roles: ['user']
  },
  {
    name: 'Daniele6',
    lastName: 'Mazzola6',
    email: 'correo6@correo.com',
    age: 32,
    phone: 777777773,
    password: 'Password-6',
    roles: ['admin']
  },
  {
    name: 'Daniele7',
    lastName: 'Mazzola7',
    email: 'correo7@correo.com',
    age: 27,
    phone: 777777774,
    password: 'Password-7',
    roles: ['user']
  },
  {
    name: 'Daniele8',
    lastName: 'Mazzola8',
    email: 'correo8@correo.com',
    age: 41,
    phone: 777777775,
    password: 'Password-8',
    roles: ['admin']
  },
  {
    name: 'Daniele9',
    lastName: 'Mazzola9',
    email: 'correo9@correo.com',
    age: 29,
    phone: 777777776,
    password: 'Password-9',
    roles: ['user']
  },
  {
    name: 'Daniele10',
    lastName: 'Mazzola10',
    email: 'correo10@correo.com',
    age: 39,
    phone: 777777777,
    password: 'Password-10',
    roles: ['admin']
  }
]

mongoose
  .connect(process.env.URI_DB)
  .then(async () => {
    const allUser = await User.find()
    if (allUser.length) await User.collection.drop()
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    for (const user of users) {
      const newUser = new User(user)
      await newUser.save()
    }
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  // Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect())
