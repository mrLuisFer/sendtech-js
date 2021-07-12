const { MessageEmbed } = require('discord.js')
const config = require('../../config.js')

let palabras = [
  'Hola, que tal',
  'Hi, how are you?',
  'hola, como estas',
  'Que tal',
  'Mucho gusto',
  'Que haces',
  'Mucho tiempo sin verte',
  'Cómo está usted',
  'Que gusto verte',
  '¿Cómo van las cosas?',
  '¿Qué pasa?',
  '¿Qué hay de nuevo?',
  'Buenas',
  'Hello world',
  'Hola mundo',
]

const hola = (msg) => {
  if (msg.content === `${config.prefix}hola` || msg.content === 'hola') {
    const palabraFinal = palabras[Math.floor(Math.random() * palabras.length)]

    const embed = new MessageEmbed()
      .setTitle(palabraFinal)
      .setDescription('Nota: Estoy Vivo :shushing_face: | Por suerte.')
      .setColor(0xf75762)

    msg.channel.send(embed).then((msg) => msg.react('👋'))
  }
}

module.exports = hola
