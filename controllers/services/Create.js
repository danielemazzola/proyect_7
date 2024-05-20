const { Services } = require('../../models/Services')
const {
  DUPLICATE_SERVICE,
  CREATE_SERVICE,
  ERROR
} = require('../utils_texts/messages')
const Create = async (req, res) => {
  try {
    const { code } = req.body
    const duplicateCode = await Services.findOne({ code })
    if (duplicateCode)
      return res.status(409).json({ message: DUPLICATE_SERVICE })
    const newService = new Services(req.body)
    await newService.save()
    res.status(201).json({ message: CREATE_SERVICE, newService })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = Create
