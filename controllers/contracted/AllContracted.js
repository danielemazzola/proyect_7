const Contract = require('../../models/Contract')
const {
  NO_SERVICES,
  YOUR_SERVICE,
  YOUR_SERVICES,
  ERROR
} = require('../utils_texts/messages')
const AllContracted = async (req, res) => {
  try {
    const { user } = req
    const contract = await Contract.find()
      .where('idUser')
      .equals(user._id)
      .populate('idService')
      .populate('idUser')
    if (contract.length === 0)
      return res.status(201).json({ message: NO_SERVICES })
    if (contract.length === 1)
      return res.status(201).json({ message: YOUR_SERVICE, contract })
    else return res.status(201).json({ message: YOUR_SERVICES, contract })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = { AllContracted }
