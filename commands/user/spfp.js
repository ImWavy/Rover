module.exports.run = async (bot, message, args) => {

    if (!/\.(jpe?g|png|gif)$/i.test(args[0])) {
        return message.reply('```that was not a valid URL.```').then(message => {message.delete(2500)})
    }

    bot.user.setAvatar(args[0])

}

module.exports.help = {
    name: "spfp",
    usage: "r!spfp <url>",
    example: "r!spfp https://picsum.photos/200",
    group: "user",
    desc: "Sets your profile picture to the image you provided."
} 