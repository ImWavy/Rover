module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply('```I need a message to set as streaming.```').then(message => {message.delete(2500)})

    if (args.join(" ").length > 100) return message.reply('```That is too long of a message to set.```').then(message => {message.delete(2500)})
    bot.user.setActivity(args.join(" "), { type: "STREAMING"})
    
  
}


module.exports.help = {
    name: "streaming",
    group: "activities",
    usage: "r!streaming <message>",
    example: "r!streaming Rover Productions",
    desc: "Sets your streaming status to your message."
}