const { MessageEmbed } = require('discord.js')
const config = require('../../config.js')

const help = (msg, client) => {
  if (msg.content === `${config.prefix}help`) {
    const embed = new MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle('El comando de ayuda, solo para ti 😃')
      .setDescription(
        `
        ${config.prefix}avatar: Nos muestra a todos tu hermosa foto de perfil\n
        ${config.prefix}sug: Manda una sugerencia a un canal, para votar por ella\n
        ${config.prefix}hola: El bot te dice hola \n
        ${config.prefix}ping: Quieres saber que tan rapido soy? \n`
      )
      .setColor(0xf75762)

    msg.channel.send(embed)
  }
}

module.exports = help
