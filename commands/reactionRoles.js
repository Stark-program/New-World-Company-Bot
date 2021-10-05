module.exports = {
  name: "reactionRoles",
  description: "this command will assign weapon roles to the users",
  async execute(message, args, Discord, client) {
    const swordAndShieldEmoji = "🛡️";
    const rapierEmoji = "🗡️";
    const hatchetEmoji = "🪓";
    const spearEmoji = "🥢";
    const greatAxeEmoji = "🐵";
    const warHammerEmoji = "🤤";
    const bowEmoji = "🏹";
    const musketEmoji = "🔫";
    const fireStaffEmoji = "🔥";
    const lifeStaffEmoji = "❤️";
    const iceGauntletEmoji = "🧊";

    let embed = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle(
        "Please choose your two main weapons for roaming and war\n\n" +
          `${swordAndShieldEmoji} for Sword and Shield \n` +
          `${rapierEmoji} for Rapier \n` +
          `${hatchetEmoji} for Hatchet \n` +
          `${spearEmoji} for Spear \n` +
          `${greatAxeEmoji} for Great Axe \n` +
          `${warHammerEmoji} for War Hammer \n` +
          `${bowEmoji} for Bow \n` +
          `${musketEmoji} for Musket \n` +
          `${fireStaffEmoji} for Fire Staff \n` +
          `${lifeStaffEmoji} for Life Staff \n` +
          `${iceGauntletEmoji} for Ice Gauntlet`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(swordAndShieldEmoji);
    messageEmbed.react(rapierEmoji);
    messageEmbed.react(hatchetEmoji);
    messageEmbed.react(spearEmoji);
    messageEmbed.react(greatAxeEmoji);
    messageEmbed.react(warHammerEmoji);
    messageEmbed.react(bowEmoji);
    messageEmbed.react(musketEmoji);
    messageEmbed.react(fireStaffEmoji);
    messageEmbed.react(lifeStaffEmoji);
    messageEmbed.react(iceGauntletEmoji);
  },
  async reactionListener(message, client) {
    const swordAndShieldEmoji = "🛡️";
    const rapierEmoji = "🗡️";
    const hatchetEmoji = "🪓";
    const spearEmoji = "🥢";
    const greatAxeEmoji = "🐵";
    const warHammerEmoji = "🤤";
    const bowEmoji = "🏹";
    const musketEmoji = "🔫";
    const fireStaffEmoji = "🔥";
    const lifeStaffEmoji = "❤️";
    const iceGauntletEmoji = "🧊";

    const channel = process.env.DEV_TEXT_WEAPON_CHANNEL;
    const guild = client.guilds.cache.get(`${process.env.DEV_GUILD_ID}`);

    const swordAndShield = guild.roles.cache.find(
      (role) => role.name === "Sword and Shield"
    );
    const rapier = guild.roles.cache.find((role) => role.name === "Rapier");
    const hatchet = guild.roles.cache.find((role) => role.name === "Hatchet");
    const spear = guild.roles.cache.find((role) => role.name === "Spear");
    const greatAxe = guild.roles.cache.find(
      (role) => role.name === "Great Axe"
    );
    const warHammer = guild.roles.cache.find(
      (role) => role.name === "War Hammer"
    );
    const bow = guild.roles.cache.find((role) => role.name === "Bow");
    const musket = guild.roles.cache.find((role) => role.name === "Musket");
    const fireStaff = guild.roles.cache.find(
      (role) => role.name === "Fire Staff"
    );
    const lifeStaff = guild.roles.cache.find(
      (role) => role.name === "Life Staff"
    );
    const iceGauntlet = guild.roles.cache.find(
      (role) => role.name === "Ice Gauntlet"
    );

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id === channel) {
        if (reaction.emoji.name === swordAndShieldEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(swordAndShield);
        } else if (reaction.emoji.name === rapierEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(rapier);
        } else if (reaction.emoji.name === hatchetEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(hatchet);
        } else if (reaction.emoji.name === spearEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(spear);
        } else if (reaction.emoji.name === greatAxeEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(greatAxe);
        } else if (reaction.emoji.name === warHammerEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(warHammer);
        } else if (reaction.emoji.name === bowEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(bow);
        } else if (reaction.emoji.name === musketEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(musket);
        } else if (reaction.emoji.name === fireStaffEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(fireStaff);
        } else if (reaction.emoji.name === lifeStaffEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lifeStaff);
        } else if (reaction.emoji.name === iceGauntletEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(iceGauntlet);
        }
      } else return;
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id === channel) {
        if (reaction.emoji.name === swordAndShieldEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(swordAndShield);
        } else if (reaction.emoji.name === rapierEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(rapier);
        } else if (reaction.emoji.name === hatchetEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(hatchet);
        } else if (reaction.emoji.name === spearEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(spear);
        } else if (reaction.emoji.name === greatAxeEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(greatAxe);
        } else if (reaction.emoji.name === warHammerEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(warHammer);
        } else if (reaction.emoji.name === bowEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(bow);
        } else if (reaction.emoji.name === musketEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(musket);
        } else if (reaction.emoji.name === fireStaffEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(fireStaff);
        } else if (reaction.emoji.name === lifeStaffEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lifeStaff);
        } else if (reaction.emoji.name === iceGauntletEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(iceGauntlet);
        }
      } else return;
    });
  },
};
