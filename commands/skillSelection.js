module.exports = {
  name: "skillReactionRoles",
  description: "this command will assign trade skill roles to the users",
  async execute(message, args, Discord) {
    const weaponsmithingEmoji = "⚔️";
    const armoringEmoji = "🔨";
    const engineeringEmoji = "🦾";
    const jewelcraftingEmoji = "💠";
    const arcanaEmoji = "✨";
    const cookingEmoji = "🧑‍🍳";
    const furnishingEmoji = "🪑";
    const smeltingEmoji = "🪨";
    const stonecuttingEmoji = "🧱";
    const leatherworkingEmoji = "🐄";
    const weavingEmoji = "🧵";
    const woodworkingEmoji = "🪵";

    let embed = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle("Please choose your 3 highest level skills as they occur\n\n")
      .setDescription(
        `${weaponsmithingEmoji} for Weaponsmithing \n` +
          `${armoringEmoji} for Armoring \n` +
          `${engineeringEmoji} for Engineering \n` +
          `${jewelcraftingEmoji} for Jewelcrafting \n` +
          `${arcanaEmoji} for Arcana \n` +
          `${cookingEmoji} for Cooking \n` +
          `${furnishingEmoji} for Furnishing \n` +
          `${smeltingEmoji} for Smelting \n` +
          `${stonecuttingEmoji} for Stonecutting \n` +
          `${leatherworkingEmoji} for Leatherworking \n` +
          `${weavingEmoji} for Weaving \n` +
          `${woodworkingEmoji} for Woodworking`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(weaponsmithingEmoji);
    messageEmbed.react(armoringEmoji);
    messageEmbed.react(engineeringEmoji);
    messageEmbed.react(jewelcraftingEmoji);
    messageEmbed.react(arcanaEmoji);
    messageEmbed.react(cookingEmoji);
    messageEmbed.react(furnishingEmoji);
    messageEmbed.react(smeltingEmoji);
    messageEmbed.react(stonecuttingEmoji);
    messageEmbed.react(leatherworkingEmoji);
    messageEmbed.react(weavingEmoji);
  },
  async reactionListener(message, client) {
    const guild = client.guilds.cache.get(`${process.env.DEV_GUILD_ID}`);
    const channel = process.env.DEV_TEXT_CHANNEL;
    const weaponSmithing = guild.roles.cache.find(
      (role) => role.name === "Weaponsmithing"
    );
    const armoring = guild.roles.cache.find((role) => role.name === "Armoring");
    const engineering = guild.roles.cache.find(
      (role) => role.name === "Engineering"
    );
    const jewelcrafting = guild.roles.cache.find(
      (role) => role.name === "Jewelcrafting"
    );
    const arcana = guild.roles.cache.find((role) => role.name === "Arcana");
    const cooking = guild.roles.cache.find((role) => role.name === "Cooking");
    const furnishing = guild.roles.cache.find(
      (role) => role.name === "Furnishing"
    );
    const smelting = guild.roles.cache.find((role) => role.name === "Smelting");
    const stonecutting = guild.roles.cache.find(
      (role) => role.name === "Stonecutting"
    );
    const leatherworking = guild.roles.cache.find(
      (role) => role.name === "Leatherworking"
    );
    const weaving = guild.roles.cache.find((role) => role.name === "Weaving");
    const woodworking = guild.roles.cache.find(
      (role) => role.name === "Woodworking"
    );
    const weaponsmithingEmoji = "⚔️";
    const armoringEmoji = "🔨";
    const engineeringEmoji = "🦾";
    const jewelcraftingEmoji = "💠";
    const arcanaEmoji = "✨";
    const cookingEmoji = "🧑‍🍳";
    const furnishingEmoji = "🪑";
    const smeltingEmoji = "🪨";
    const stonecuttingEmoji = "🧱";
    const leatherworkingEmoji = "🐄";
    const weavingEmoji = "🧵";
    const woodworkingEmoji = "🪵";

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id === channel) {
        if (reaction.emoji.name === weaponsmithingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(weaponSmithing);
        } else if (reaction.emoji.name === armoringEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(armoring);
        } else if (reaction.emoji.name === engineeringEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(engineering);
        } else if (reaction.emoji.name === jewelcraftingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(jewelcrafting);
        } else if (reaction.emoji.name === arcanaEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(arcana);
        } else if (reaction.emoji.name === cookingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(cooking);
        } else if (reaction.emoji.name === furnishingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(furnishing);
        } else if (reaction.emoji.name === smeltingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(smelting);
        } else if (reaction.emoji.name === stonecuttingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(stonecutting);
        } else if (reaction.emoji.name === leatherworkingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(leatherworking);
        } else if (reaction.emoji.name === weavingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(weaving);
        } else if (reaction.emoji.name === woodworkingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(woodworking);
        }
      } else return;
    });
    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id === channel) {
        if (reaction.emoji.name === weaponsmithingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(weaponSmithing);
        } else if (reaction.emoji.name === armoringEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(armoring);
        } else if (reaction.emoji.name === engineeringEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(engineering);
        } else if (reaction.emoji.name === jewelcraftingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(jewelcrafting);
        } else if (reaction.emoji.name === arcanaEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(arcana);
        } else if (reaction.emoji.name === cookingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(cooking);
        } else if (reaction.emoji.name === furnishingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(furnishing);
        } else if (reaction.emoji.name === smeltingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(smelting);
        } else if (reaction.emoji.name === stonecuttingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(stonecutting);
        } else if (reaction.emoji.name === leatherworkingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(leatherworking);
        } else if (reaction.emoji.name === weavingEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(weaving);
        }
      } else return;
    });
  },
};
