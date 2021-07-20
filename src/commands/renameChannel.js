const { Client } = require('discord.js')
const config = require('../../config')

// const rename = (msg, args) => {
//     if(msg.member.roles.cache.has("865085080090574878")) return msg.reply("No tienes permitido usar este comando.")
//     else {msg.channel.setName(args[0])}
// }

const rename = (msg, args) => {
    if(msg.member.roles.cache.has("790972987779973150")) {
        msg.channel.setName(args[0])
    }
    else {
        return msg.reply("No tienes permitido usar este comando.")
    }
}

module.exports = rename