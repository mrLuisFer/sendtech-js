const config = require('../../../config')
const fetch = require('node-fetch')

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

    if (giphyData.data.length === 0) return msg.reply('No se ha encontrado ningún gif')

    const randomIdNumber = Math.floor(Math.random() * giphyData.data.length)
    const gifUrl = giphyData.data[randomIdNumber].images.original.url

    return msg.reply(gifUrl)
  } catch (err) {
    console.log(err)
    return msg.reply('No se ha encontrado ningún gif')
  }
}

module.exports = giphySearch
