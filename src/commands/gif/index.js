const randomSearch = require('./randomSearch')
const giphySearch = require('./giphySearch')

/**
 * @param {Message} msg -> Message object
 * @param {string} args -> Text for search in the API
 */
const gif = async (msg, args) => {
  if (args.length === 0 || args === undefined || !args) return msg.reply('Escribe el Gif a buscar')

  console.log(args)
  let ratingForSearch = 'gp'
  let ratingForRandomSearch = 'g'

  if (args[1] === '--nsfw' || args[1] === 'nsfw') {
    ratingForSearch = 'r'
    ratingForRandomSearch = 'r'
  }
  console.log(ratingForSearch)

  if (args[0] === '--random' || args[0] === 'random') {
    randomSearch(msg, ratingForRandomSearch)
  } else {
    giphySearch(msg, args, ratingForSearch)
  }
}

module.exports = gif
