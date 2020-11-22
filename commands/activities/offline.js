module.exports.run = async (bot) => {

    bot.user.setActivity(null)
    bot.user.setStatus('invisible')
  
}


module.exports.help = {
    name: "offline",
    group: "activities",
    usage: "r!offline",
    example: "r!offline",
    desc: "Sets your status to offline."
}