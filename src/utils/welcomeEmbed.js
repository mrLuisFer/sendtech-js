const { MessageEmbed } = require('discord.js')
const config = require('../../config')

/**
 * @function welcomeEmbed
 * @param {GuildMember} member
 * @returns MessageEmbed
 */
const welcomeEmbed = (member) => {
  const displayName = member ? member.displayName : 'SendTech'
  const avatarUrl = member ? member.user.displayAvatarURL() : ''

  const embed = new MessageEmbed()
    .setTitle(`Bienvenid@ ${member ? member.displayName : 'a Sendero Tecnologico'} `)
    .setDescription('Recuerda aprender y compartir tus conocimientos con toda SendTech Community')
    .setColor(config.embedColor)
    .setImage('https://i.ibb.co/31q6GYR/BIENVENIDA.png')
    .setAuthor(displayName, avatarUrl)

  return embed
}

module.exports = welcomeEmbed
