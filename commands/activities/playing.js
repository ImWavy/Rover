module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply('```I need a message to set as playing.```').then(message => {message.delete(2500)})

    if (args.join(" ").length > 100) return message.reply('```That is too long of a message to set.```').then(message => {message.delete(2500)})
    bot.user.setActivity(args.join(" "), { type: "PLAYING"})
  
}


module.exports.help = {
    name: "playing",
    group: "activities",
    usage: "r!playing <message>",
    example: "r!playing Rover Productions",
    desc: "Sets your playing status to your message."
}