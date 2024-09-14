const axios = require("axios");

const apiKey = process.env.API_KEY;
const externalUserId = process.env.EXTERNAL_USER_ID;

// Function to create chat session
async function createChatSession() {
  try {
    const response = await axios.post(
      "https://api.on-demand.io/chat/v1/sessions",
      {
        pluginIds: [],
        externalUserId: externalUserId,
      },
      {
        headers: {
          apikey: apiKey,
        },
      }
    );
    return response.data.data.id; // Extract session ID
  } catch (error) {
    console.error("Error creating chat session:", error);
    throw error;
  }
}

// Function to submit query
async function submitQuery(sessionId, text) {
  try {
    const response = await axios.post(
      `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`,
      {
        endpointId: "predefined-openai-gpt4o",
        query: text,
        pluginIds: ["plugin-1712327325", "plugin-1713962163"],
        responseMode: "sync",
      },
      {
        headers: {
          apikey: apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting query:", error);
    throw error;
  }
}

// Main function to execute the flow
async function Translator(text) {
  try {
    const sessionId = await createChatSession();
    const queryResponse = await submitQuery(sessionId, text);
    return queryResponse;
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

module.exports = { Translator };
