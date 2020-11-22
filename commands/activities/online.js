module.exports.run = async (bot) => {

    bot.user.setActivity(null)
    bot.user.setStatus('online')
  
}


module.exports.help = {
    name: "online",
    group: "activities",
    usage: "r!online",
    example: "r!online",
    desc: "Sets your status to online."
}