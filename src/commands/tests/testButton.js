const { MessageButton } = require('discord-buttons')

const testButton = (msg) => {
  const button = new MessageButton()
    .setStyle('blurple')
    .setLabel('My First Button!')
    .setID('click_to_function')

  msg.channel.send('Hey', button)
}

module.exports = testButton
