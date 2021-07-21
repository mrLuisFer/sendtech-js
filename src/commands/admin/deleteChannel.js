const deleteChannel = (msg, args) => {
    if(msg.member.roles.cache.has('790972987779973150')) {
        msg.channel.delete(args[0])
    }
    else {
        return msg.reply('No tienes permitido usar este comando.')
    }
}

module.exports = deleteChannel