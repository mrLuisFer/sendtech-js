const { MessageButton, MessageActionRow } = require('discord-buttons')
const clipboardy = require('clipboardy')

const testButton = (msg, client) => {
  const button2Id = 'second_button_function'

  const button2 = new MessageButton()
    .setURL('https://discord.gg/4FUtbhatAg')
    .setStyle('url')
    .setLabel('Vayamos al servidor! ;D')
    .setEmoji('🌟')

  const button = new MessageButton().setStyle('red').setLabel('Copiar enlace!').setID(button2Id)

  const row = new MessageActionRow().addComponents(button, button2)

  msg.channel.send('Invita a tus amigos al servidor! :D https://discord.gg/4FUtbhatAg', row)

  client.on('clickButton', async (button) => {
    if (button.id === button2Id) {
      console.log(`Ejecutando ${button.id}`)
      await button.channel.send('Clickeado')

      clipboardy.writeSync('https://discord.gg/4FUtbhatAg')
    }

    await button.reply.defer()
  })
}

module.exports = testButton
