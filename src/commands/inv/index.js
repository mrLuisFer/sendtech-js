const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const clipboardy = require('clipboardy')
const config = require('../../../config')

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

  msg.channel.send(`Invita a tus amigos al servidor! 📎${config.serverUrl}`, row)

  client.on('clickButton', async (button) => {
    if (button.id === copyUrlBtnId) {
      console.log(`Ejecutando ${button.id}`)
      console.log(button.guild)
      clipboardy.writeSync('https://discord.gg/4FUtbhatAg')

      const embed = new MessageEmbed()
        .setTitle('Mensaje copiado?')
        .setDescription(
          `Si estas utilizando Windows, puedes intentar copiar el mensaje e intentar pegarlo con \`ctrl + v \` 
           
           Pero por alguna razon windows no permite interacturar con el portapapeles, aunque puedes copiar el url directamente
          
           Si estas en **Linux** o **Mac**, ignora este mensaje :)
          `
        )
        .setColor(config.embedColor)
        .setThumbnail('https://media.giphy.com/media/MJTOHmGiGPHgI/giphy.gif')

      await button.channel.send(embed)

      await button.channel.send('Copiado!')
    }

    await button.reply.defer()
  })
}

module.exports = invitation
