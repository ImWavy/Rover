module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply('```I need a message to set as watching.```').then(message => {message.delete(2500)})

    if (args.join(" ").length > 100) return message.reply('```That is too long of a message to set.```').then(message => {message.delete(2500)})
    bot.user.setActivity(args.join(" "), { type: "WATCHING"})

}


module.exports.help = {
    name: "watching",
    group: "activities",
    usage: "r!watching <message>",
    example: "r!watching Rover Productions",
    desc: "Sets your watching status to your message."
}