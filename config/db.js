/*
This code connects to a MongoDB database.
It uses the mongoose library to connect to the database.
It uses the MONGO_URL environment variable to specify the connection string.
*/

const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

function connectToDatabase() {
  try {
    mongoose.connect(
      "mongodb+srv://arunodaysingh137:nZDhpk9xJBlHCOsU@cluster0.ijeaou8.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongodb Connected !");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
