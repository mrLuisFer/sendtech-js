const { MessageEmbed } = require('discord.js')
const config = require('../../config.js')

const suggest = (msg) => {
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  const channelSuggest = msg.guild.channels.cache.get('864155481516802088')
  if (command === 'suggest' || command === 'sug') {
    if (!args[0]) return msg.channel.send(`El comando es ${config.prefix}sug [msg]`)

    const embed = new MessageEmbed()
      .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setTitle('Nueva Sugerencia!')
      .setDescription(args.join(' '))
      .setColor(0xf75762)
    channelSuggest.send(embed).then((msg) => {
      msg.react('⬆').then(() => {
        msg.react('⬇')
      })
    })
  }
}

module.exports = suggest
