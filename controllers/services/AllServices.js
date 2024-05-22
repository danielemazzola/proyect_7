const Services = require('../../models/Services')
const {
  ERROR,
  SERVICE,
  SERVICES,
  NOT_SERVICES
} = require('../../helpers/texts/messages')

const AllServices = async (req, res) => {
  try {
    const allServices = await Services.find()
    if (!allServices.length)
      return res.status(404).json({ message: NOT_SERVICES })
    if (allServices.length === 1)
      return res.status(200).json({ message: SERVICE, allServices })
    else return res.status(200).json({ message: SERVICES, allServices })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = AllServices
