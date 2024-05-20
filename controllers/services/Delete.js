const Services = require('../../models/Services')
const {
  ERROR,
  NOT_SERVICES,
  DELETE_SERVICE
} = require('../utils_texts/messages')
const Delete = async (req, res) => {
  try {
    const { _id } = req.params
    const service = await Services.findById(_id)
    if (!service) return res.status(404).json({ message: NOT_SERVICES })
    const deleteService = await Services.findByIdAndDelete(service)
    return res.status(200).json({ message: DELETE_SERVICE, deleteService })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = Delete
