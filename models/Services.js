const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    },
    code: {
      type: String,
      required: true
    }
  },
  { timeStamps: true }
)

const Services = mongoose.model('Services', serviceSchema)
module.exports = Services
