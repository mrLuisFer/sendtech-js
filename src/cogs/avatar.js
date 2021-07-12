const { MessageEmbed } = require('discord.js')
const config = require('../../config.js')

const avatar = (msg) => {
  if (msg.content === `${config.prefix}avatar`) {
    const embed = new MessageEmbed()
      .setTitle(`Que guap@ ${msg.author.username}`)
      .setImage(msg.author.displayAvatarURL())
      .setColor(0xf75762)

    msg.channel.send(embed).then((msg) => msg.react('😉'))
  }
}

module.exports = avatar
