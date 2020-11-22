const { RichEmbed } = require('discord.js')
module.exports.run = async (bot, message, args) => {

    
    if (args.join(" ").length > 2000) message.reply('```Message may not exceed 2000 characters.```').then(message => {message.delete(2500)})
    
    message.channel.send(new RichEmbed().setDescription(args.join(" ")).setColor("#707070"))
   
}


module.exports.help = {
    name: "embed",
    usage: "r!embed <message>",
    example: "r!embed Ok BoOmEr",
    group: "user",
    desc: "Returns an embed with your message.."
} 