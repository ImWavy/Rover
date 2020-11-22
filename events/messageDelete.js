const { RichEmbed } = require('discord.js')
module.exports = (bot, message) => {
    if(!message.guild) return;

    if(bot.snipe.get(`${bot.user.id}-${message.guild.id}`)) {
        message.channel.send(new RichEmbed().setDescription(message.content).setColor("#707070").setAuthor(message.author.tag, message.author.displayAvatarURL).setTimestamp(Date.now()))
    }

    bot.snipe.set(message.guild.id, { content: message.content, time: Date.now(), author: message.author.id })
}