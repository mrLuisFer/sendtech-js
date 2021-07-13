const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const config = require('../../config.js')

const wiki = async (message, args) => {
  if (args === undefined || !args) return message.reply('Escribe el item a buscar') // If Nothing Is Searched
  const wikiQuery = args[0]
  console.log(wikiQuery)

  if (wikiQuery !== undefined) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiQuery)}` // From Here BOT Will Search For It

    let response
    try {
      response = await fetch(url).then((res) => res.json())
    } catch (error) {
      console.log(error)
      return message.reply('Ocurrió un error, intentelo de nuevo')
    }

    try {
      if (response.type === 'disambiguation') {
        const embed = new MessageEmbed()
          .setColor(config.embedColor)
          .setTitle(response.title)
          .setURL(response.content_urls.desktop.page)
          .setDescription([
            `
            ${response.extract}
            Links For Topic You Searched [Link](${response.content_urls.desktop.page}).`,
          ])
        message.channel.send(embed)
      } else {
        // Only One Result
        const embed = new MessageEmbed()
          .setColor(config.embedColor)
          .setTitle(response.title)
          .setThumbnail(response.thumbnail.source)
          .setURL(response.content_urls.desktop.page)
          .setDescription(response.extract)
        message.channel.send(embed)
      }
    } catch {
      return message.reply('Coloca alguna cosa para buscar ;)') // If Searched Query Is Not Available
    }
  } else {
    return message.reply('Coloca alguna cosa para buscar ;)') // If Searched Query Is Not Available
  }
}

module.exports = wiki
