const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  Longitude: { type: Number, required: true },
  Latitude: { type: Number, required: true },
  streetLightId: { Id: String, required: true },
  IsLightfuse: { type: Boolean, required: true },
  IsLightflicker: { type: Boolean, required: true },
  IsLightfading: { type: Boolean, required: true },
});

module.exports = new mongoose.Schema("StreetLightInfo", Schema);
