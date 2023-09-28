const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  mobile_no: { type: Number, required: true },
  long: { type: String, required: true },
  lat: { type: String, required: true },
});

module.exports = new mongoose.model("LightManInfo", Schema);
