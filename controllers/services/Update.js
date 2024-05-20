const Services = require('../../models/Services')
const {
  ERROR,
  NOT_SERVICES,
  UPDATE_SERVICE
} = require('../utils_texts/messages')
const Update = async (req, res) => {
  try {
    const { _id } = req.params
    const service = await Services.findById(_id)
    if (!service) return res.status(404).json({ message: NOT_SERVICES })
    const updateService = await Services.findByIdAndUpdate(_id, req.body, {
      new: true
    })
    return res.status(200).json({ message: UPDATE_SERVICE, updateService })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = Update
