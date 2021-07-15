const config = require('../../config')
const fetch = require('node-fetch')

/**
 * @param {Message} msg -> Message object
 * @param {string} args -> Text for search in the API
 */
const gif = async (msg, args) => {
  if (args.length === 0 || args === undefined || !args) return msg.reply('Escribe el Gif a buscar')

  console.log(args)
  const length = 5
  let rating = 'gp'

  if (args[1] === '--nsfw' || args[1] === 'nsfw') {
    rating = 'r'
  }
  console.log(rating)

  try {
    const giphyBaseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${config.GIPHY_API_KEY}&limit=${length}&rating=${rating}&q=`
    const giphyUrlQuery = `${giphyBaseUrl}${args}`

    const response = await fetch(giphyUrlQuery)
    const giphyData = await response.json()
    // console.log(giphyData)

    if (giphyData.data.length === 0) return msg.reply('No se ha encontrado ningún gif')

    const randomIdNumber = Math.floor(Math.random() * giphyData.data.length)
    const gifUrl = giphyData.data[randomIdNumber].images.original.url

    return msg.reply(gifUrl)
  } catch (err) {
    console.log(err)
    return msg.reply('No se ha encontrado ningún gif')
  }
}

module.exports = gif
