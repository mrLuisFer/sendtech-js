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
        **${config.prefix}avatar**: Nos muestra a todos tu hermosa foto de perfil
        **${config.prefix}sug**: Manda una sugerencia a un canal, para votar por ella
        **${config.prefix}hola**: El bot te dice hola
        **${config.prefix}ping**: Quieres saber que tan rapido soy?`
      )
      .setColor(config.embedColor)

    msg.channel.send(embed)
  }
}

module.exports = help
