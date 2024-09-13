const express = require('express')
const { getAllUsers } = require('./handler')

const userRouter = express.Router()

userRouter.use('/', getAllUsers)

module.exports = {userRouter}