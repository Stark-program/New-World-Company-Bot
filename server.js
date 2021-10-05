require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var ObjectId = require("mongodb").ObjectID;
const app = express();
const userModel = require("./Schemas/userSchema");
const donationSchema = require("./Schemas/donationSchema");

const mongodbPassword = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://Cstark:${mongodbPassword}@cluster0.jylys.mongodb.net/Donation_Tracker?retryWrites=true&w=majority`;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
const db = mongoose.connection;

app.post("/donations", async (req, res) => {
  let user = req.body.name;
  let id = req.body.discordId;
  let donation = req.body.donationAmount;

  let userDonation = new donationSchema({
    name: user,
    discordId: id,
    donationAmount: donation,
  });

  await userDonation.save((err, user) => {
    if (err) console.log(err);
    else res.status(201).send("Donation received!");
  });
});

connectDB();
app.listen(3001);
