const mongoose = require('mongoose')

const contractedSchema = mongoose.Schema(
  {
    idService: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Services'
    },
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timeStamps: true }
)

const Contract = mongoose.model('Product', contractedSchema)
module.exports = Contract
