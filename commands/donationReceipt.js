const { default: axios } = require("axios");
const { execute } = require("./reactionRoles");

module.exports = {
  name: "donation-receipt",
  description:
    "New world does not offer in game tracking of who donates to the company. This command, when used, will allow users to track their donations. Not automatically, unfortunatley, but they will be able to command the bot to track how much they donated, when, and the total amount in which they have donated.",
  async execute(message, args, Discord, client) {
    let textChannel = process.env.DONATION_RECEIPT_CHANNEL_ID;
    let serverUrl = "http://localhost:3001";
    let donationNumber = parseFloat(args);
    if (message.channel.id === textChannel) {
      if (Number.isFinite(donationNumber) && donationNumber > 0) {
        let user = message.author.username;
        let user_id = message.author.id;

        let userDonation = {
          name: user,
          discordId: user_id,
          donationAmount: donationNumber,
        };

        axios.post(`${serverUrl}/donations`, userDonation).then((res) => {
          let embed = new Discord.MessageEmbed()
            .setColor("#e42643")
            .setTitle(`Thank you ${res.data.user} for your donation!\n\n`)
            .setDescription(`Amount donated: ${res.data.donation}`);
          message.channel.send(embed);
        });
      } else
        message.reply(
          "Please enter the correct format for your donation: !donation *-only numbers here-* example: !donation 500"
        );
    } else return;
  },
  async getUsertotal(message, args, Discord, client) {
    let textChannel = process.env.DONATION_RECEIPT_CHANNEL_ID;
    function run(user) {
      let discordId = user.id;

      let serverUrl = "http://localhost:3001";

      let userInfo = {
        id: discordId,
      };

      axios
        .post(`${serverUrl}/donationtotals`, userInfo)
        .then((res) => {
          let user = res.data[0].name;
          let totalDonations = res.data[0].totalDonated;

          let embed = new Discord.MessageEmbed()
            .setColor("#e42643")
            .setTitle(`${user}'s Total donation amount!\n\n`)
            .setDescription(`${totalDonations} 🪙's`);
          message.channel.send(embed);
        })
        .catch((err) => {
          message.reply(err.response.data.message);
        });
    }
    if (message.channel.id === textChannel) {
      if (Object.keys(message.mentions.users).length > 0) {
        message.mentions.users.forEach((user) => {
          run(user);
        });
      } else {
        run(message.author);
      }
    }
  },
};
