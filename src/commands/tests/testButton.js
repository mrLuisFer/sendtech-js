const { MessageButton, MessageActionRow } = require('discord-buttons')

const testButton = (msg, client) => {
  const button = new MessageButton()
    .setURL('https://discord.gg/4FUtbhatAg')
    .setStyle('url')
    .setLabel('Vayamos al servidor! ;D')
    .setEmoji('🌟')

  const button2 = new MessageButton()
    .setStyle('red')
    .setLabel('Copiar enlace!')
    .setID('second_button_function')

  const row = new MessageActionRow().addComponents(button, button2)

  msg.channel.send('Invita a tus amigos al servidor! :D https://discord.gg/4FUtbhatAg', row)

  // client.on('clickButton', async (button) => {
  //   console.log(`Ejecutando ${button.id}`)

  //   let s = button.send(`Tocaste el ${button.id}`)
  //   msg.channel.send(s)
  // })
}

module.exports = testButton
