
const express = require('express')
const { getFlights } = require('./handler')

const searchRouter = express.Router()

searchRouter.use('/trip', getFlights )

module.exports = {searchRouter}



