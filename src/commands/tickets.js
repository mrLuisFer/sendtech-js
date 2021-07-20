const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const config = require('../../config')

const ticket = (msg, client) => {
  const openTicket = new MessageButton()
    // Configuracion del ticket
    .setStyle('red')
    .setLabel('Abre ticket')
    .setID('open-ticket')
    .setEmoji('🚪');
    // Configuracion del embed
    const embed = new MessageEmbed()
    .setTitle('Tienes algo que decirles a los admins')
    .setColor(config.embedColor)
    msg.channel.send(embed, openTicket)
    
    
    let e = msg.guild.channels.cache.find(canal => {
        canal.name === `${msg.author.username}-st`});
    if (e){
        console.log(e);
        return msg.channel.send("No puedes crear otro ticket")
    }
    
client.on('clickButton', (button) => {
    if (button.id === 'open-ticket') {
        const everyone = msg.guild.roles.cache.find(rol => rol.name === '@everyone');
        const admins = msg.guild.roles.cache.find(rol => rol.name === 'Desarrolladores');
        
        msg.guild.channels.create(`${msg.author.username}-st`, {
            permissionOverwrites: [
                {
                    id: everyone.id,
                    deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                },
                {
                    id: admins.id,  
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                },
                {
                    id: msg.author.id,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                }
            ],
            parent: "866861620646641685"
        })
        .then(msg => {
            // opciones en el ticket
            const embed = new MessageEmbed()
                .setTitle('Bienvenido al ticket')
                .setColor(config.embedColor)
            const closeTicket = new MessageButton()
                .setStyle('red')
                .setLabel('Cierra ticket')
                .setID('close-ticket')
                .setEmoji('🔒')
            msg.send(embed, closeTicket)
        })
    }
    if (button.id === 'close-ticket') {
        button.channel.delete() 
    }
  })
}

module.exports = ticket
