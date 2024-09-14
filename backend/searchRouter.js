const express = require("express");
const { getFlights, translate } = require("./handler");

const searchRouter = express.Router();

searchRouter.use("/trip", getFlights);

searchRouter.use("/translate", translate);

module.exports = { searchRouter };
