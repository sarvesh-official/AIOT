
const express = require('express')
const { getFlights } = require('./handler')

const searchRouter = express.Router()

searchRouter.use('flights', getFlights )

module.exports = {searchRouter}



