const express = require("express");

const cors = require("cors");

require("dotenv").config();
const connectDB = require("./mongoConnect");
const { userRouter } = require("./userRouter");
const { searchTrains } = require("./searchTrain");
const { searchFlights } = require("./searchFlight");
const { getWeather } = require("./weather");
const { searchRouter } = require("./searchRouter");
const { currencyConverter } = require("./currencyConverter");
const { Translator } = require("./translator");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 6969;
const axios = require("axios");

connectDB();

app.use("/api/users", userRouter);
app.use("/api/search", searchRouter);

app.put("/convert", async (req, res) => {
  const { from, to, amount } = req.body; // Extract from request body

  if (!from || !to || !amount) {
    return res.status(400).send({ error: "Missing parameters" });
  }

  const apiKey = process.env.API_KEY;
  const externalUserId = process.env.EXTERNAL_USER_ID;

  const query = `Convert ${amount} ${from} into ${to} and just give the converted value as a float type no other explanation needed`;

  try {
    const sessionId = await createChatSession(apiKey, externalUserId);
    const queryResponse = await submitQuery(apiKey, sessionId, query);

    // Extracting result from the response (adjust based on actual response structure)
    const result = queryResponse.data.answer;

    res.status(200).send({ result });
  } catch (error) {
    console.error("Error in currency conversion:", error);
    res.status(500).send({ error: "Error in currency conversion" });
  }
});

async function createChatSession(apiKey, externalUserId) {
  const url = "https://api.on-demand.io/chat/v1/sessions";
  const headers = { apikey: apiKey };
  const body = { pluginIds: [], externalUserId: externalUserId };

  try {
    const response = await axios.post(url, body, { headers });
    return response.data.data.id;
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

app.get("/", (req, res) => {
  // searchTrains()
  // searchFlights()
  // getWeather()
  // currencyConverter()
  // Translator()
  res.send("hello");
});

app.put("/search", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res
      .status(400)
      .json({ error: "externalUserId and query are required" });
  }

  try {
    // Create a chat session with the given external user ID
    const sessionId = await createChatSession(externalUserId);

    // Submit the query to the chat session
    const queryResponse = await submitQuery(sessionId, query);

    // Send the response back to the user
    res.status(200).json({ success: true, response: queryResponse });
  } catch (error) {
    console.error("Error in route handler:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log("hello bruh");
});
