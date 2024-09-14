const express = require('express')

const cors = require('cors')

require('dotenv').config()
const connectDB = require('./mongoConnect')
const { userRouter } = require('./userRouter')
const { searchTrains } = require('./searchTrain')
const { searchFlights } = require('./searchFlight')
const { getWeather } = require('./weather')
const { searchRouter } = require('./searchRouter')
const { currencyConverter } = require('./currencyConverter')
const { Translator } = require('./translator')

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

connectDB()

app.use('/api/users', userRouter)
app.use('/api/search', searchRouter)

// const requestLogger = (req, res, next) => {
//     console.log('hello');
//     next();
// };

// app.use(requestLogger)


app.get('/',(req,res) => {

    // searchTrains()
    // searchFlights()
    // getWeather()
    // currencyConverter()
    // Translator()
    res.send("hello")
})

app.listen(port , () => {
    console.log("hello bruh")
})