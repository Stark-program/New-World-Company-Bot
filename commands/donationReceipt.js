const { default: axios } = require("axios");
const { execute } = require("./reactionRoles");

module.exports = {
  name: "donation-receipt",
  description:
    "New world does not offer in game tracking of who donates to the company. This command, when used, will allow users to track their donations. Not automatically, unfortunatley, but they will be able to command the bot to track how much they donated, when, and the total amount in which they have donated.",
  async execute(message, args, Discord, client) {
    let serverUrl = "http://localhost:3001/users";
    let donationAmount = parseFloat(args);
    if (Number.isFinite(donationAmount) && donationAmount > 0) {
      console.log(message);
      let user = message.author.username;
      console.log(user);
      let userDonation = {
        user: user,
        donation: donationAmount,
      };
      axios.post(serverUrl, userDonation).then((res) => console.log(res));
      console.log(donationAmount, "worked");
    } else
      message.reply(
        "Please enter the correct format for your donation: !donation *-only numbers here-* example: !donation 500"
      );
  },
};
