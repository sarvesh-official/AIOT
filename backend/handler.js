const User = require("./userModel");

const searchFlights = require('./searchFlight')



const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};

const getFlights = async (req , res) =>{
    try {
        const data = searchFlights();
        res.send({'data' : data})
    } catch (error) {
        throw new Error(error)
        console.log('error: ', error);
    }
}


module.exports = {getAllUsers, getFlights}