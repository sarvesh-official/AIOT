const express = require('express')

const cors = require('cors')

require('dotenv').config()
const connectDB = require('./mongoConnect')
const { userRouter } = require('./userRouter')
const { searchTrains } = require('./searchTrain')
const { searchFlights } = require('./searchFlight')

const app = express()

const port = process.env.PORT || 3001

connectDB()

app.use('/api/users', userRouter)

// const requestLogger = (req, res, next) => {
//     console.log('hello');
//     next();
// };

// app.use(requestLogger)

app.use(cors())

app.get('/',(req,res) => {

    // searchTrains()
    // searchFlights()
    res.send("hello")
})

app.listen(port , () => {
    console.log("hello bruh")
})