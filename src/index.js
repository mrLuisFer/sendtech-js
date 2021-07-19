const { Client, MessageEmbed } = require('discord.js');
const disbut = require("discord-buttons");
const config = require('../config.js')
const presence = require('./utils/presence.js')
// Commands
const avatar = require('./commands/avatar.js')
const hola = require('./commands/hola')
const pingPong = require('./commands/ping.js')
const suggest = require('./commands/suggest.js')
const help = require('./commands/help.js')
const wiki = require('./commands/wiki.js')
const gif = require('./commands/gif')
const npm = require('./commands/npm.js')
const url = require('./commands/URLcutter.js')

// El intents le da permiso para dar roles y dar la bienvenida
const client = new Client({ ws: { intents: 32767 } })
const testButton = require('./commands/tests/testButton.js')
const invitation = require('./commands/inv/index.js')
const welcomeEmbed = require('./utils/welcomeEmbed')
require('discord-buttons')(client)

// Hace algo cuando el bot esta online
client.on('ready', () => {
  console.log('Estado del bot:', client.user.presence.status)
  console.log('100% [██████████] Cargado')
  presence(client)
})

// Ve cuando entra un nuevo usuario al server
client.on('guildMemberAdd', (member) => {
  const channelWelcome = member.guild.channels.cache.get('790999067060600852')
  // add Rol Member
  member.roles.add('790977106698960918')
  // Msg Welcome user
  const embed = welcomeEmbed(member)

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
      /*
       *  TODO: Buscar una manera de ejecutar los comandos
       *  de manera que sea rapida y eficiente para el servidor
       */
      switch (command) {
        case 'ping':
          pingPong(msg)
          break
        case 'npm':
          npm(msg, args)
          break
        case 'url':
          url(msg, args)
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
        case 'gif':
          gif(msg, args)
          break
        case 'testbtn':
          testButton(msg, client)
          break
        case 'inv':
          invitation(msg, client)
          break
      }
    } catch (err) {
      console.error(err)
    }
  }
})

client.login(config.BOT_TOKEN)
