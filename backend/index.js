const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

// Initialize environment variables
dotenv.config();

const connectDB = require("./mongoConnect");
const { userRouter } = require("./userRouter");
const { searchRouter } = require("./searchRouter");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 6969;
const apiKey = process.env.API_KEY;
const externalUserId = process.env.EXTERNAL_USER_ID;

connectDB();

app.use("/api/users", userRouter);
app.use("/api/search", searchRouter);

// Convert Route
app.put("/convert", async (req, res) => {
  const { from, to, amount } = req.body;

  async function ConvertQuery(apiKey, sessionId, query) {
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
  if (!from || !to || !amount) {
    return res.status(400).send({ error: "Missing parameters" });
  }

  const query = `Convert ${amount} ${from} into ${to} and just give the converted value as a float type, no other explanation needed even if it is approximate. Just give the output in decimal no other values`;

  try {
    const sessionId = await createChatSession(apiKey, externalUserId);
    const queryResponse = await ConvertQuery(apiKey, sessionId, query);

    console.log("Query Response:", queryResponse);

    const result = queryResponse.data.answer || queryResponse.result;

    res.status(200).send({ result });
  } catch (error) {
    console.error(
      "Error in currency conversion:",
      error.response?.data || error.message
    );
    res.status(500).send({ error: "Error in currency conversion" });
  }
});

// Search Route
app.put("/search", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "query is required" });
  }

  try {
    const sessionId = await createChatSession(apiKey, externalUserId);
    const queryResponse = await submitQuery(apiKey, sessionId, query);

    res.status(200).json({ success: true, response: queryResponse });
  } catch (error) {
    console.error(
      "Error in search route:",
      error.response?.data || error.message
    );
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Function to create chat session
async function createChatSession(apiKey, externalUserId) {
  const url = "https://api.on-demand.io/chat/v1/sessions";
  const headers = { apikey: apiKey };
  const body = { pluginIds: [], externalUserId: externalUserId };

  try {
    const response = await axios.post(url, body, { headers });
    return response.data.data.id;
  } catch (error) {
    console.error(
      "Error creating chat session:",
      error.response?.data || error.message
    );
    throw error;
  }
}

// Function to submit query
async function submitQuery(apiKey, sessionId, query) {
  const url = `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`;
  const headers = { apikey: apiKey };

  const prompt =
    "Generate a JSON object that represents a detailed trip plan with the following structure:\n" +
    "- `trip_plan`: An object containing details about the trip.\n" +
    '  - `destination`: A string indicating the trip destination (e.g., "Bali").\n' +
    '  - `duration`: A string indicating the duration of the trip (e.g., "7 days").\n' +
    "  - `itinerary`: An array of objects where each object represents a day of the trip.\n" +
    "    - Each object has:\n" +
    "      - `day`: An integer representing the day number (e.g., 1).\n" +
    '      - `activities`: An array of strings listing activities planned for that day (e.g., ["Arrive at Ngurah Rai International Airport", "Check-in at hotel in Seminyak", "Dinner at local restaurant"]).\n' +
    "  - `accommodations`: An array of objects where each object represents an accommodation.\n" +
    "    - Each object has:\n" +
    '      - `name`: A string indicating the name of the accommodation (e.g., "Hotel in Seminyak").\n' +
    '      - `type`: A string indicating the type of accommodation (e.g., "Hotel").\n' +
    '      - `duration`: A string indicating the duration of the stay (e.g., "7 nights").\n' +
    "  - `transportation`: An array of objects where each object represents a mode of transportation.\n" +
    "    - Each object has:\n" +
    '      - `type`: A string indicating the type of transportation (e.g., "Flight").\n' +
    '      - `details`: A string providing details about the transportation (e.g., "Round-trip from home country to Bali").\n' +
    "Generate the JSON with sample data that matches this structure. Only provide the JSON object, no other explanation is needed.";

  const body = {
    endpointId: "predefined-openai-gpt4o",
    query: prompt + " " + query,
    pluginIds: ["plugin-1712327325", "plugin-1713962163"],
    responseMode: "sync",
  };

  try {
    const response = await axios.post(url, body, { headers });

    return response.data;
  } catch (error) {
    console.error(
      "Error submitting query:",
      error.response?.data || error.message
    );
    throw error;
  }
}

// Root Route
app.get("/", (req, res) => {
  res.send("hello");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
