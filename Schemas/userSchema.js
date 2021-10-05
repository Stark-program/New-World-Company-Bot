const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = "users";
const userSchema = new Schema({
  name: String,
  id: Number,
});

const user_model = mongoose.model(users, userSchema);

module.exports = user_model;
