const axios = require('axios');

async function getWeather() {
  const options = {
    method: 'GET',
    url: 'https://open-weather13.p.rapidapi.com/city/landon/EN',
    headers: {
      'x-rapidapi-key': 'cc322e9590msh9fd5ba43fb2e543p137fbcjsna271fe07181a',
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
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
