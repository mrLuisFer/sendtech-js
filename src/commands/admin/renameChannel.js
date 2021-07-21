const { Client } = require('discord.js')
const config = require('../../../config')

const renameChannel = (msg, args) => {
    if(msg.member.roles.cache.has("790972987779973150")) {
        msg.channel.setName(args[0])
    }
    else {
        return msg.reply("No tienes permitido usar este comando.")
    }
}

module.exports = renameChannel