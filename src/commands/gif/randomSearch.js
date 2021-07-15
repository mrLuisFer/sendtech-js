const config = require('../../../config')
const fetch = require('node-fetch')
const { getRandomNumber } = require('../../utils/getRandomNumber')

/**
 * @param {Message} msg
 * @param {string} rating
 */
const randomSearch = async (msg, rating) => {
  const randomTags = ['code', 'development', 'programming', 'gaming', 'hacker']
  const randomIdNumber = getRandomNumber(randomTags.length)

  console.log(randomTags[randomIdNumber])
  const giphyRandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${config.GIPHY_API_KEY}&rating=${rating}&tag=${randomTags[randomIdNumber]}`

  const response = await fetch(giphyRandomUrl)
  const giphyRandomData = await response.json()

  // console.log(giphyRandomData)

  const gifUrl = giphyRandomData.data.images.original.url

  msg.reply(gifUrl)
}

module.exports = randomSearch
