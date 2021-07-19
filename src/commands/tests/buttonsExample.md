# Button Example

```js
const button = new MessageButton()
  .setStyle('blurple')
  .setLabel('My First Button!')
  .setID('click_to_function')

msg.channel.send('Hey', button)
```

# Options Example

```js
const option = new MessageMenuOption()
  .setLabel('Your Label')
  .setEmoji('🍔')
  .setValue('menuid')
  .setDescription('Custom Description!')

const select = new MessageMenu()
  .setID('customid')
  .setPlaceholder('Click me! :D')
  .setMaxValues(1)
  .setMinValues(1)
  .addOption(option)

msg.channel.send('Text with menu!', select)
```

# Multiple Btns

```js
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

  client.on('clickButton', async (button) => {
    console.log(`Ejecutando ${button}`)
  })
}

module.exports = testButton
```
