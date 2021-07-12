const { Client, MessageEmbed } = require('discord.js');
const config = require('../../config.json');

const suggest = msg => {
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const channelSuggest = msg.guild.channels.cache.get("864155481516802088");
if(command === `suggest`) {
  if(!args[0]) return msg.channel.send(`El comando es ${config.prefix}suggest [msg]`)

    const embed = new MessageEmbed()
      .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setTitle(`Suggestion`)
      .setDescription(args.join(" "))
      .setColor(0xF75762)
    channelSuggest.send(embed).then(msg =>{
      msg.react('⬆').then(() => { 
      msg.react('⬇')
      });
    });
}
}

module.exports = suggest