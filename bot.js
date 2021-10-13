require("dotenv").config();
const reactionRoles = require("./commands/reactionRoles");
const skillSelection = require("./commands/skillSelection");
const donationReceipt = require("./commands/donationReceipt");
const connectToDatabase = require("./server");
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "REACTION", "CHANNEL"],
});

const token = process.env.BOT_TOKEN;
/*---To get around heroku PORT error ---*/
var express = require("express");
var app = express();
app.set("port", process.env.PORT || 5000);
app
  .get("/", function (request, response) {
    var result = "App is running";
    response.send(result);
  })
  .listen(app.get("port"), function () {
    console.log(
      "App is running, server is listening on port ",
      app.get("port")
    );
  });
/*--- For getting around Heroku PORt error ---*/
const prefix = "!";

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "reaction-roles") {
    reactionRoles.execute(message, args, Discord, client);
  }
  if (command === "trade-skill-selection") {
    skillSelection.execute(message, args, Discord, client);
  }
  if (command === "donation") {
    donationReceipt.execute(message, args, Discord, client);
  }
  if (command === "donation-total") {
    donationReceipt.getUsertotal(message, args, Discord, client);
  }
  if (command === "donation-leaderboard") {
    donationReceipt.getLeaderboard(message, args, Discord, client);
  }
});
client.once("ready", (message) => {
  skillSelection.reactionListener(message, client);
  reactionRoles.reactionListener(message, client);
  donationReceipt.donationReaction(message, client);
  connectToDatabase();

  console.log("Ready!");
});
client.login(token);
