const { Client } = require('discord.js');
const config = require('../config')
const presence = require('./utils/presence.js')
// Commands
// Entretenimiento
const gif = require('./commands/entretenimiento/gif');
const hola = require('./commands/entretenimiento/hola');
const ball = require('./commands/entretenimiento/8ball.js')
const avatar = require('./commands/entretenimiento/avatar.js');
// Server
const invitation = require('./commands/server/inv.js');
const suggest = require('./commands/server/suggest.js');
const ticket = require('./commands/server/tickets.js');
// Utilidades
const help = require('./commands/utilidades/help.js');
const npm = require('./commands/utilidades/npm.js');
const pingPong = require('./commands/utilidades/ping');
const url = require('./commands/utilidades/URLcutter.js');
const wiki = require('./commands/utilidades/wiki.js');
// admin
const renameChannel = require('./commands/admin/renameChannel.js');
const deleteChannel = require('./commands/admin/deleteChannel.js')

// El intents le da permiso para dar roles y dar la bienvenida
const client = new Client({ ws: { intents: 32767 } })
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

  if (msgContent.startsWith(config.prefix)) {
    const args = msgContent.toLocaleLowerCase().slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

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
        case 'inv':
          invitation(msg, client)
          break
        case 'ticket':
          ticket(msg, client)
          break
        case 'rename':
          renameChannel(msg, args)
          break
        case 'delete':
          deleteChannel(msg, args)
        break
        case '8ball':
          ball(msg, args)
        break
      }
    } catch (err) {
      console.error(err)
    }
  }
})

client.login(config.BOT_TOKEN)
