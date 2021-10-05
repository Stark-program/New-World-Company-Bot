const { default: axios } = require("axios");
const { execute } = require("./reactionRoles");

module.exports = {
  name: "donation-receipt",
  description:
    "New world does not offer in game tracking of who donates to the company. This command, when used, will allow users to track their donations. Not automatically, unfortunatley, but they will be able to command the bot to track how much they donated, when, and the total amount in which they have donated.",
  async execute(message, args, Discord, client) {
    let serverUrl = "http://localhost:3001";
    let donationNumber = parseFloat(args);
    if (Number.isFinite(donationNumber) && donationNumber > 0) {
      console.log(message);
      let user = message.author.username;
      let user_id = message.author.id;
      console.log(user);
      let userDonation = {
        name: user,
        discordId: user_id,
        donationAmount: donationNumber,
      };
      axios
        .post(`${serverUrl}/donations`, userDonation)
        .then((res) => console.log(res));
      console.log(donationNumber, "worked");
    } else
      message.reply(
        "Please enter the correct format for your donation: !donation *-only numbers here-* example: !donation 500"
      );
  },
};
