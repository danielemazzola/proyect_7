const mongoose = require('mongoose')

const CONNECTION = async () => {
  try {
    await mongoose.connect(`${process.env.URI_DB}`)
    console.log(`
    **     **  ******   **      **  ******   ******
    ***   *** **    **  ***     ** **    ** **    **
    **** ****/**      * ****    **/**      /**      *
    ** *** **/**      * ** **   **/**      /**      *
    **     **/**      * **  **  **/** *****/**      *
    **     ** **    **  **   ** **/**    ** **    **
    **     **  ******   **    ****  *******  ****** 
`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = CONNECTION
