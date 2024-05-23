const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      trim: true,
      required: true
    },
    roles: {
      type: [String],
      enum: ['user', 'admin'],
      default: ['user']
    }
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  this.password = bcrypt.hashSync(this.password, 10)
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User
