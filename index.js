const express = require("express");
const bp = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const nodemailer = require("nodemailer");
const userinfo = require("./models/LightManSchema");
const connectToDatabase = require("./config/db.js");
const expressAsyncHandler = require("express-async-handler");

const app = express();
app.use(bp.json());
app.use(
  cors({
    origin: process.env.client_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Connect to the database
connectToDatabase();

app.get("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("I got the request get side");
});

app.get("/getUser", async (req, res) => {
  try {
    const data = await userinfo.find();
    // console.log(data);
    res.status(200).json(data); // Send the data as JSON response
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Handle the error gracefully
  }
});

const accumulatedData = {};

app.post("/", (req, res) => {
  accumulatedData.data.push(req.body);
  res.status(200).send("I got the request");
  console.log("I am called", accumulatedData);
});

app.post("/api/emailreading", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "codetilllogn@gmail.com",
      pass: "xlxc pnwk pmpv ojqx",
    },
  });

  var mailOptions = {
    from: "codetilllogn@gmail.com",
    to: "arunodaysingh137@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log("Server connected on port 3000");
  }
});
