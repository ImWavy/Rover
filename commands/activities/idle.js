module.exports.run = async (bot) => {

    bot.user.setActivity(null)
    bot.user.setStatus('idle')
  
}


module.exports.help = {
    name: "idle",
    group: "activities",
    usage: "r!idle",
    example: "r!idle",
    desc: "Sets your status to idle."
}