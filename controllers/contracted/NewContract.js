const Contract = require('../../models/Contract')
const Services = require('../../models/Services')
const {
  NEW_CONTRACT,
  DUPLICATE_SERVICE_CONTRACT,
  ERROR,
  NOT_EXIST_SERVICE
} = require('../utils_texts/messages')
const NewContract = async (req, res) => {
  try {
    const { idService } = req.body
    const { user } = req
    const comproveService = await Services.findById(idService)
    if (!comproveService)
      return res.status(409).json({ message: NOT_EXIST_SERVICE })
    const existContract = await Contract.find()
      .where('idService')
      .equals(idService)

    if (existContract.length > 0)
      return res.status(409).json({ message: DUPLICATE_SERVICE_CONTRACT })

    const newContract = new Contract()
    newContract.idService = idService
    newContract.idUser = user._id
    await newContract.save()
    return res.status(201).json({ message: NEW_CONTRACT, newContract })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = NewContract
