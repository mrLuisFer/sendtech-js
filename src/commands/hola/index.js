'use strict'

const { MessageEmbed } = require('discord.js')
const config = require('../../../config.js')
const palabras = require('./palabras')
const getRandomNumber = require('../../utils/getRandomNumber')

/**
 * @function hola
 * @param {Message} msg The message object
 * @returns {void} void
 */
const hola = (msg) => {
  if (msg.content === `${config.prefix}hola` || msg.content === 'hola') {
    const palabraFinal = palabras[getRandomNumber(palabras.length)]

    const embed = new MessageEmbed()
      .setTitle(palabraFinal)
      .setDescription('Nota: Estoy Vivo :shushing_face: | Por suerte.')
      .setColor(config.embedColor)

    msg.channel.send(embed).then((msg) => msg.react('👋'))
  }
}

module.exports = hola
