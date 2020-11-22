module.exports.run = async (bot, message) => {

    try {

        let user = message.mentions.users.first()
        if(!user) return message.reply('```You forgot to mention a user to steal!```').then(message => {message.delete(2500)})
  
    

    bot.user.setAvatar(user.displayAvatarURL)
    return;


} catch(err) {
    message.channel.send('```Error, make sure you are not trying to upload a gif image when you do not have nitro.```').then(message => {message.delete(2500)})
}

}



module.exports.help = {
    name: "pfp",
    usage: "r!pfp @Jecta",
    example: "r!pfp @Jecta",
    group: "user",
    desc: "Grabs mentioned users profile picture and sets it as yours."
} 