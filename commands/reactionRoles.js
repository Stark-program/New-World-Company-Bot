const { DiscordAPIError } = require("discord.js");

require("dotenv").config();

module.exports = {
  name: "reactionRoles",
  description: "this command will assign weapon roles to the users",
  async execute(message, args, Discord, client) {
    const channel = process.env.WEAPON_CHANNEL_ID;

    const swordAndShield = message.guild.roles.cache.find(
      (role) => role.name === "Sword and Shield"
    );
    const rapier = message.guild.roles.cache.find(
      (role) => role.name === "Rapier"
    );
    const hatchet = message.guild.roles.cache.find(
      (role) => role.name === "Hatcher"
    );
    const spear = message.guild.roles.cache.find(
      (role) => role.name === "Spear"
    );
    const greatAxe = message.guild.roles.cache.find(
      (role) => role.name === "Great Axe"
    );
    const warHammer = message.guild.roles.cache.find(
      (role) => role.name === "War Hammer"
    );
    const bow = message.guild.roles.cache.find((role) => role.name === "Bow");
    const musket = message.guild.roles.cache.find(
      (role) => role.name === "Musket"
    );
    const fireStaff = message.guild.roles.cache.find(
      (role) => role.name === "Fire Staff"
    );
    const lifeStaff = message.guild.roles.cache.find(
      (role) => role.name === "Life Staff"
    );
    const iceGauntlet = message.guild.roles.cache.find(
      (role) => role.name === "Ice Gauntlet"
    );
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
        }
        if (reaction.emoji.name === rapierEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(rapier);
        }
        if (reaction.emoji.name === hatchetEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(hatchet);
        }
        if (reaction.emoji.name === spearEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(spear);
        }
        if (reaction.emoji.name === greatAxeEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(greatAxe);
        }
        if (reaction.emoji.name === warHammerEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(warHammer);
        }
        if (reaction.emoji.name === bowEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(bow);
        }
        if (reaction.emoji.name === musketEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(musket);
        }
        if (reaction.emoji.name === fireStaffEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(fireStaff);
        }
        if (reaction.emoji.name === lifeStaffEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lifeStaff);
        }
        if (reaction.emoji.name === iceGauntletEmoji) {
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
        }
      } else return;
    });
  },
};
