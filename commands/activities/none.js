module.exports.run = async (bot) => {

    bot.user.setActivity(null)
    bot.user.setStatus('online')
  
}


module.exports.help = {
    name: "none",
    group: "activities",
    usage: "r!none",
    example: "r!none",
    desc: "Removes your watching, gaming or streaming status."
}