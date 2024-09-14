const axios = require('axios');
const { replaceOne } = require('./userModel');

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
    console.error('Error creating chat session:', error.message || error);
    throw new Error('Failed to create chat session'); // Propagate error
  }
}

// Function to submit a query
async function submitQuery(sessionId, source, destination, date) {
  try {
    const response = await axios.post(
      `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`,
      {
        endpointId: 'predefined-openai-gpt4o',
        query: `Need to fly from ${source} to ${destination} on ${date}`,
        pluginIds: ['plugin-1726239637'],
        responseMode: 'sync'
      },
      {
        headers: {
          apikey: apiKey
        }
      }
    );
    console.log('Query response:', response.data.data);
    return response.data.data.answer;
  } catch (error) {
    console.error('Error submitting query:', error.message || error);
    throw new Error('Failed to submit query'); // Propagate error
  }
}

// Main function to execute the API calls
async function searchFlightsRes(source, destination, date) {
  try {
    const sessionId = await createChatSession(); // Await session creation
    if (sessionId) {
      const response = await submitQuery(sessionId, source, destination, date); // Await the query response
      return response; // Return the response to caller
    }
  } catch (error) {
    console.error('Error during flight search:', error.message || error);
    throw error; // Propagate the error up to the caller
  }
}

module.exports = { searchFlightsRes };
