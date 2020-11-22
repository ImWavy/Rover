const { RichEmbed } = require('discord.js')
module.exports.run = async (bot, message) => {

    if(!message.guild) return message.reply("```This command can only be executed in guilds!```").then(message => {message.delete(2500)});

    let sniped = bot.snipe.get(message.guild.id)
    if(!sniped) return message.reply('```Found no sniped message!```').then(message => {message.delete(2500)})
    message.channel.send(new RichEmbed().setDescription(sniped.content).setColor("#707070").setAuthor(bot.users.get(sniped.author).tag, bot.users.get(sniped.author).displayAvatarURL).setTimestamp(sniped.time)).then(message => {message.delete(7500)})
    
}



module.exports.help = {
    name: "snipe",
    usage: "r!snipe",
    example: "r!snipe",
    group: "user",
    desc: "Snipes the last deleted message in the server.",
} 