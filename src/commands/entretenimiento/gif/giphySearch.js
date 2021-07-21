const config = require('../../../../config')
const fetch = require('node-fetch')
const getRandomNumber = require('../../../utils/getRandomNumber.js')
const { MessageEmbed } = require('discord.js')

/**
 * @param {Message} msg
 * @param {string[]} args
 * @param {number} rating
 */
const giphySearch = async (msg, args, rating) => {
  const length = 10

  const giphySearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${config.GIPHY_API_KEY}&limit=${length}&rating=${rating}&q=`

  const giphyUrlQuery = `${giphySearchUrl}${args}`

  try {
    const response = await fetch(giphyUrlQuery)
    const giphyData = await response.json()

    const randomIdNumber = getRandomNumber(giphyData.data.length)
    const gifUrl = giphyData.data[randomIdNumber].images.original.url
    
    const embed = new MessageEmbed()
    .setImage(gifUrl)
    .setColor(config.embedColor)
    return msg.channel.send(embed);
  }

  catch (err) {
    if (args.length === 0 || args === undefined || !args){
      const embed = new MessageEmbed()
      .setTitle(`El comando es ${config.prefix}gif [nombre] no ${config.prefix}gif`)
      .setImage('https://media.giphy.com/media/eKrgVyZ7zLvJrgZNZn/giphy.gif')
      .setColor(config.embedColor)
      msg.channel.send(embed)
  }
  else {
    const embed = new MessageEmbed()
    .setTitle('No se ha encontrado ningún gif')
    .setImage('https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif')
    .setColor(config.embedColor)
    msg.channel.send(embed)
  }
  }
}

module.exports = giphySearch
