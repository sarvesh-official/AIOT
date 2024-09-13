const axios = require('axios');

async function getWeather() {
  const options = {
    method: 'GET',
    url: 'https://open-weather13.p.rapidapi.com/city/landon/EN',
    headers: {
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      'x-rapidapi-host': process.env.X_RAPIDAPI_HOST
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

module.exports = {getWeather}
