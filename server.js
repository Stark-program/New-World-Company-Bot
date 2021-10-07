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

  let userDonation = new donationSchema({
    name: user,
    discordId: id,
    donationAmount: donation,
  });

  let discordUser = new userModel({
    name: user,
    discordId: id,
    totalDonated: donation,
  });

  try {
    userModel.exists({ discordId: id }, async function (err, result) {
      if (err) {
        res.send(err);
        console.log(err);
      }
      if (result === false || result === null) {
        await discordUser.save((err, user) => {
          if (err) console.log(err);
        });
      } else {
        userModel.find({ _id: result._id }, function (err, result) {
          if (err) console.log(err);
          else {
            let usersTotalDonated = result[0].totalDonated;
            userModel.updateOne(
              { discordId: id },
              { totalDonated: usersTotalDonated + donation },
              function (err, doc) {
                if (err) console.log(err);
              }
            );
          }
        });
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

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
      console.log("shits empty");
      res.status(404).send({ message: "User has not donated to the company!" });
    } else {
      return res.status(201).send(data);
    }
  });
});

app.listen(3001);
