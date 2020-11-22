module.exports.run = async (bot) => {  
    
    bot.user.setAvatar('https://picsum.photos/200')

}

module.exports.help = {
    name: "rpfp",
    usage: "r!rpfp",
    example: "r!pfp",
    group: "user",
    desc: "Applies a random pfp to your account."
} 