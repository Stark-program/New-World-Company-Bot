const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donations = "donations";
const donationSchema = new Schema({
  name: String,
  discordId: Number,
  donationAmount: Number,
  approved: Boolean,
  messageId: Number,
});

const donation_model = mongoose.model(donations, donationSchema);

module.exports = donation_model;
