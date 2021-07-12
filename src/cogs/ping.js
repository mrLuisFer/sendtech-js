const { MessageEmbed } = require("discord.js");
const config = require("../../config.js");

const pingPong = (msg) => {
  if (msg.content === `${config.prefix}ping`) {
    const ping = Date.now() - msg.createdTimestamp;

    const embed = new MessageEmbed()
      .setTitle(`Pong | ${ping}ms`)
      .setColor(0xf75762);
    msg.channel.send(embed).then((msg) => msg.react("🏓"));
  }
};

module.exports = pingPong;
