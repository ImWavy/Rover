module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply('```I need a message to set as watching.```').then(message => {message.delete(2500)})

    if (args.join(" ").length > 100) return message.reply('```That is too long of a message to set.```').then(message => {message.delete(2500)})
    bot.user.setActivity(args.join(" "), { type: "LISTENING"})

}


module.exports.help = {
    name: "listening",
    group: "activities",
    usage: "r!listening <message>",
    example: "r!listening Rover Productions",
    desc: "Sets your listening status to your message."
}