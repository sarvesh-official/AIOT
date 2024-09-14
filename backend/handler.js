const User = require("./userModel");

const searchFlightsRes = require("./searchFlight");
const { Translator } = require("./translator");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};

const getFlights = async (req, res) => {
  try {
    const { source, destination, date } = req.query;

    if (!source || !destination || !date) {
      return res
        .status(400)
        .json({ error: "Missing required query parameters" });
    }

    const data = await searchFlightsRes.searchFlightsRes(
      source,
      destination,
      date
    );
    console.log("data: ", data);

    if (!data) {
      return res.status(404).json({ error: "No flights found" });
    }

    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching flights:", error.message || error);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
};

const translate = async (req, res) => {
  try {
    const Text = req.body.text;
    const data = await Translator(Text);

    console.log("data: ", data);
    if (!data) {
      return res.status(404).json({ error: "No flights found" });
    }

    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching flights:", error.message || error);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
};
module.exports = { getAllUsers, getFlights, translate };
