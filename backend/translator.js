const axios = require('axios');

const apiKey = process.env.API_KEY;
const externalUserId = process.env.EXTERNAL_USER_ID;

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
    return response.data.data.id;
  } catch (error) {
    console.error('Error creating chat session:', error);
    throw error;
  }
}

async function submitQuery(sessionId, query) {
  try {
    const response = await axios.post(
      `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`,
      {
        endpointId: 'predefined-openai-gpt4o',
        query: query,
        pluginIds: ['plugin-1712327325', 'plugin-1713962163'],
        responseMode: 'sync'
      },
      {
        headers: {
          apikey: apiKey
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error submitting query:', error);
    throw error;
  }
}

async function Translator(query) {
  try {
    const sessionId = await createChatSession();
    const queryResponse = await submitQuery(sessionId, query);
    console.log('Query Response:', queryResponse);
    return queryResponse;
  } catch (error) {
    console.error('Error in main function:', error);
    throw error;
  }
}

Translator("Translate 'How are you' into Telugu")

module.exports = { Translator };