const { MessageEmbed } = require('discord.js')
const config = require('../../config.js')

/**
 * @function help
 * @param {Message} msg The message object
 * @param {Client} client The bot client
 * @returns {void}
 */
const help = (msg, client) => {
  if (msg.content === `${config.prefix}help`) {
    const username = client ? client.user.username : 'Miembro'
    const avatarUrl = client ? client.user.displayAvatarURL() : ''

    const embed = new MessageEmbed()
      .setAuthor(username, avatarUrl)
      .setTitle('El comando de ayuda, solo para ti 😃')
      .setDescription(
        `
        **${config.prefix}avatar**: Muestranos a todos tu hermosa foto
        **${config.prefix}sug**: Manda una sugerencia
        **${config.prefix}hola**: Te saluda el bot
        **${config.prefix}ping**: Quieres saber que tan rapido soy?
        **${config.prefix}gif [var]**: Busca un gif
        **${config.prefix}inv**: Invita gente
        **${config.prefix}wiki [var]**: Busca algo en la wikipedia`
      )
      .setColor(config.embedColor)

    msg.channel.send(embed)
  }
}

module.exports = help
