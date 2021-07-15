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

  if (args[0] === '--random' || args[0] === 'random') {
    const giphyRandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${config.GIPHY_API_KEY}&rating=g&tag=programming`

    const response = await fetch(giphyRandomUrl)
    const giphyRandomData = await response.json()

    console.log(giphyRandomData)

    const gifUrl = giphyRandomData.data.images.original.url

    msg.reply(gifUrl)
  } else {
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
}

module.exports = gif
