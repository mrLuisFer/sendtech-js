const { Client, MessageEmbed } = require('discord.js')
const config = require('../config.js')
const presence = require('./utils/presence.js')
// Commands
const avatar = require('./commands/avatar.js')
const hola = require('./commands/hola')
const pingPong = require('./commands/ping.js')
const suggest = require('./commands/suggest.js')
const help = require('./commands/help.js')
const wiki = require('./commands/wiki.js')

// El intents le da permiso para dar roles y dar la bienvenida
const client = new Client({ ws: { intents: 32767 } })

// Hace algo cuando el bot esta online
client.on('ready', () => {
  console.log('Estado del bot:', client.user.presence.status)
  console.log("100% [██████████] Cargado")
  presence(client)
})

// Ve cuando entra un nuevo usuario al server
client.on('guildMemberAdd', (member) => {
  const channelWelcome = member.guild.channels.cache.get('790999067060600852')
  // add Rol Member
  member.roles.add('790977106698960918')
  // Msg Welcome user
  const embed = new MessageEmbed()
    .setTitle(`Bienvenid@ ${member.displayName} `)
    .setDescription('Recuerda aprender y compartir tus conocimientos con toda SendTech Community')
    .setColor(config.embedColor)
    .setImage(
      'https://lh3.googleusercontent.com/l-9Cie5TSnzti1fdAkmBevlM_QYoUGz7E0_MRA_nnPTEkIIEVQPN3oHD4o0xvBFrsirchQ=s170'
    )
    .setAuthor(member.displayName, member.user.displayAvatarURL())
  channelWelcome.send(embed).then((member) => member.react('👋'))
})

client.on('message', (msg) => {
  // Valida que los mensajes no sean del bot
  if (msg.author === client.user) return
  if (msg.author.bot) return

  const msgContent = msg.content

  if (msgContent.startsWith('!')) {
    const args = msgContent.toLocaleLowerCase().slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    console.log(`Command: ${command}`)

    try {
      switch (command) {
        case 'ping':
          pingPong(msg)
          break
        case 'avatar':
          avatar(msg)
          break
        case 'suggest':
        case 'sug':
          suggest(msg, args, command)
          break
        case 'hola' || 'Hola':
          hola(msg)
          break
        case 'help':
          help(msg, client)
          break
        case 'wiki':
        case 'search':
          wiki(msg, args)
          break
      }
    } catch (err) {
      console.error(err)
    }
  }
})

client.login(config.BOT_TOKEN)
