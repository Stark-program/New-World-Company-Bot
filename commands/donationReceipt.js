const { default: axios } = require("axios");
const { execute } = require("./reactionRoles");

module.exports = {
  name: "donation-receipt",
  description:
    "New world does not offer in game tracking of who donates to the company. This command, when used, will allow users to track their donations. Not automatically, unfortunatley, but they will be able to command the bot to track how much they donated, when, and the total amount in which they have donated.",
  async execute(message, args, Discord, client) {
    console.log(message);
    console.log(2, message.channel.id);
    let textChannel = process.env.DEV_GENERAL_TEXT_CHANNEL;
    let serverUrl = "http://localhost:3001";
    let donationNumber = parseFloat(args);
    if (message.channel.id === textChannel) {
      if (Number.isFinite(donationNumber) && donationNumber > 0) {
        console.log(message);
        let user = message.author.username;
        let user_id = message.author.id;

        let userDonation = {
          name: user,
          discordId: user_id,
          donationAmount: donationNumber,
        };

        axios.post(`${serverUrl}/donations`, userDonation).then((res) => {
          console.log(2, res.data);
          let embed = new Discord.MessageEmbed()
            .setColor("#e42643")
            .setTitle(`Thank you ${res.data.user} for your donation!\n\n`)
            .setDescription(`Amount donated: ${res.data.donation}`);
          message.channel.send(embed);
        });
        console.log(donationNumber, "worked");
      } else
        message.reply(
          "Please enter the correct format for your donation: !donation *-only numbers here-* example: !donation 500"
        );
    } else return;
  },
};
