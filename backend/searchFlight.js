const axios = require('axios');

// Replace with your actual API key and external user ID
const apiKey = process.env.API_KEY;
const externalUserId = process.env.EXTERNAL_USER_ID;

// Function to create a chat session
async function createChatSession() {
  try {
    const response = await axios.post(
      'https://api.on-demand.io/chat/v1/sessions',
      {
        pluginIds: [],
        externalUserId: externalUserId
      },
      {
        headers: {
          apikey: apiKey
        }
      }
    );
    return response.data.data.id; // Extract session ID
  } catch (error) {
    console.error('Error creating chat session:', error);
  }
}

// Function to submit a query
async function submitQuery(sessionId) {
  try {
    const response = await axios.post(
      `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`,
      {
        endpointId: 'predefined-openai-gpt4o',
        query: 'Need to fly from Los Angeles to Tokyo',
        pluginIds: ['plugin-1726239637'],
        responseMode: 'sync'
      },
      {
        headers: {
          apikey: apiKey
        }
      }
    );
    console.log('Query response:', response.data);
    return response.data
  } catch (error) {
    console.error('Error submitting query:', error);
  }
}

// Main function to execute the API calls
async function searchFlights() {
  const sessionId = await createChatSession();
  if (sessionId) {
    await submitQuery(sessionId);
  }
}


module.exports = { searchFlights }