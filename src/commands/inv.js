const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const clipboardy = require('clipboardy')
const config = require('../../config')
const welcomeEmbed = require('../utils/welcomeEmbed')

/**
 * @function invitation
 * @param {Message} msg -> Message Object
 * @param {Client} client -> Discord Client Object
 */
const invitation = (msg, client) => {
  const copyUrlBtnId = 'copyUrlBtnId'

  const sendToServerBtn = new MessageButton()
    .setURL(config.serverUrl)
    .setStyle('url')
    .setLabel('Vayamos al servidor!')
    .setEmoji('🌟')

  const copyUrlBtn = new MessageButton()
    .setStyle('red')
    .setLabel('Copiar enlace!')
    .setID(copyUrlBtnId)
    .setEmoji('⚡')

  const row = new MessageActionRow().addComponents(copyUrlBtn, sendToServerBtn)
  const embed = new MessageEmbed()
  .setTitle('Invita a tus amigos al servidor')
  .setFooter(`📌 ${config.serverUrl}`)
  .setColor(config.embedColor)
  msg.channel.send(embed, row)

  client.on('clickButton', async (button) => {
    if (button.id === copyUrlBtnId) {
      console.log(`Ejecutando ${button.id}`)
      console.log(button.guild)
      clipboardy.writeSync('https://discord.gg/4FUtbhatAg')
      // const embed = new MessageEmbed()
      //   .setAuthor(client.user.username, client.user.displayAvatarURL())
      //   .setTitle('Mensaje copiado?')
      //   .setDescription(
      //     `
      //     Aveces en windows no funciona, ve si te copio la url si no copia la url que esta mas arriba
          
      //      Si estas en **Linux** o **Mac**, ignora este mensaje :)
      //     `
      //   )
      //   .setColor(config.embedColor)
      //   .setThumbnail('https://media.giphy.com/media/MJTOHmGiGPHgI/giphy.gif')

      // await button.channel.send(embed)
    }

    await button.reply.defer()
  })
}

module.exports = invitation
