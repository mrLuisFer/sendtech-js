const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

const wiki = async (message, args) => {
  if (args === undefined || !args) return message.reply('Escribe el item a buscar') // If Nothing Is Searched
  const wikiQuery = args[0]
  console.log(wikiQuery)

  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiQuery)}` // From Here BOT Will Search For It

  let response
  try {
    response = await fetch(url).then((res) => res.json())
  } catch (e) {
    console.log(e)
    return message.reply('Ocurrió un error, intentelo de nuevo')
  }

  try {
    if (response.type === 'disambiguation') {
      const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(response.title)
        .setURL(response.content_urls.desktop.page)
        .setDescription([
          `
                ${response.extract}
                Links For Topic You Searched [Link](${response.content_urls.desktop.page}).`,
        ])
      message.channel.send(embed)
    } else {
      // If Only One Result
      const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(response.title)
        .setThumbnail(response.thumbnail.source)
        .setURL(response.content_urls.desktop.page)
        .setDescription(response.extract)
      message.channel.send(embed)
    }
  } catch {
    return message.reply('Coloca alguna cosa para buscar ;)') // If Searched Query Is Not Available
  }
}

module.exports = wiki