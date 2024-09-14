const User = require("./userModel");

const searchFlightsRes = require('./searchFlight')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};

const getFlights = async (req, res) => {
    try {
        // Extract query parameters from the request
        const { source, destination, date } = req.query;

        // Validate query parameters
        if (!source || !destination || !date) {
            return res.status(400).json({ error: 'Missing required query parameters' });
        }

        // Log the received parameters for debugging
        // console.log(`Source: ${source}, Destination: ${destination}, Date: ${date}`);

        // Call the function to get flight data
        const data = await searchFlightsRes.searchFlightsRes(source, destination, date);
        console.log('data: ', data);
        
        // Check if data was returned
        if (!data) {
            return res.status(404).json({ error: 'No flights found' });
        }
        
        // Respond with the flight data
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching flights:', error.message || error);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Failed to fetch flights' });
    }
};

module.exports = {getAllUsers, getFlights}