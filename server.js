require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var ObjectId = require("mongodb").ObjectID;
const app = express();
const userModel = require("./Schemas/userSchema");
const donationSchema = require("./Schemas/donationSchema");

const uri = process.env.MONGODB_PRODUCTION_URL;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
mongoose.set("returnOriginal", false);

module.exports = connectDB = async () => {
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
  let approvedDonation = req.body.approved;
  let messageId = req.body.messageId;

  let userDonation = new donationSchema({
    name: user,
    discordId: id,
    donationAmount: donation,
    approved: approvedDonation,
    messageId: messageId,
  });

  await userDonation.save((err, user) => {
    if (err) console.log(err);
    else
      res.status(201).send({
        message: "Donation received!",
        user: user.name,
        donation: user.donationAmount,
      });
  });
});

app.post("/donationtotals", async (req, res) => {
  userModel.find({ discordId: req.body.id }, function (err, data) {
    if (err) console.log("error");
    else if (!data.length) {
      res.status(404).send({ message: "User has not donated to the company!" });
    } else {
      return res.status(201).send(data);
    }
  });
});

app.get("/donationleaderboard", async (req, res) => {
  const leaders = {};
  userModel.find({}, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      users.forEach((user) => {
        leaders[user.name] = user.totalDonated;
      });
    }

    res.status(201).json(leaders);
  });
});

app.post("/approved", async (req, res) => {
  let messageId = req.body.messageId;

  try {
    let donationUpdate = await donationSchema.findOne({ messageId: messageId });

    let discordUser = new userModel({
      name: donationUpdate.name,
      discordId: donationUpdate.discordId,
      totalDonated: donationUpdate.donationAmount,
    });
    userModel.exists(
      { discordId: donationUpdate.discordId },
      async function (err, result) {
        if (err) {
          res.send(err);
          console.log(err);
        }
        if (result === false || result === null) {
          await discordUser.save((err, user) => {
            if (err) console.log(err);
          });
        } else {
          let user = await userModel.findOne({
            discordId: donationUpdate.discordId,
          });
          donationUpdate.approved = true;
          donationUpdate.save();
          user.totalDonated += donationUpdate.donationAmount;
          user.save();
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001);
