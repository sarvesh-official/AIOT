const User = require("./userModel");

const searchFlights = require("./searchFlight");
const { currencyConverter } = require("./currencyConverter");
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
    const data = searchFlights();
    res.send({ data: data });
  } catch (error) {
    console.log("error: ", error);
    throw new Error(error);
  }
};

// app.get("/convert", async (req, res) => {
//   try {
//     await currencyConverter(req);
//     res.status(200);
//   } catch (error) {
//     res.status(500).send({ error: "Error in currency conversion" });
//   }
// });

module.exports = { getAllUsers, getFlights };
