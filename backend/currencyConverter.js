const axios = require("axios");

require("dotenv").config();

async function createChatSession(apiKey, externalUserId) {
  const url = "https://api.on-demand.io/chat/v1/sessions";
  const headers = { apikey: apiKey };
  const body = { pluginIds: [], externalUserId: externalUserId };

  try {
    const response = await axios.post(url, body, { headers });
    return response.data.data.id; // Extract session ID
  } catch (error) {
    console.error("Error creating chat session:", error);
    throw error;
  }
}

async function submitQuery(apiKey, sessionId, query) {
  const url = `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`;
  const headers = { apikey: apiKey };
  const body = {
    endpointId: "predefined-openai-gpt4o",
    query: query,
    pluginIds: ["plugin-1712327325", "plugin-1713962163"],
    responseMode: "sync",
  };

  try {
    const response = await axios.post(url, body, { headers });
    return response.data;
  } catch (error) {
    console.error("Error submitting query:", error);
    throw error;
  }
}

const currencyConverter = async () => {
  const apiKey = process.env.API_KEY;
  console.log("apiKey: ", apiKey);
  const externalUserId = process.env.EXTERNAL_USER_ID;
  console.log("externalUserId: ", externalUserId);
  const query = "Convert 100 rs into Aed and just give the converted value";

  try {
    const sessionId = await createChatSession(apiKey, externalUserId);
    const queryResponse = await submitQuery(apiKey, sessionId, query);
    console.log("Query Response:", queryResponse);
  } catch (error) {
    console.error("Error in chat process:", error);
  }
};

module.exports = { currencyConverter };
