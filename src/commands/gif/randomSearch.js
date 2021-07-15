const config = require('../../../config')
const fetch = require('node-fetch')

/**
 * @param {Message} msg
 * @param {number} rating
 */
const randomSearch = async (msg, rating) => {
  const giphyRandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${config.GIPHY_API_KEY}&rating=g&tag=programming`

  const response = await fetch(giphyRandomUrl)
  const giphyRandomData = await response.json()

  console.log(giphyRandomData)

  const gifUrl = giphyRandomData.data.images.original.url

  msg.reply(gifUrl)
}

module.exports = randomSearch
