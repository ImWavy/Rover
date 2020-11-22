module.exports.run = async (bot) => {

    bot.user.setActivity(null)
    bot.user.setStatus('dnd')
  
}


module.exports.help = {
    name: "dnd",
    group: "activities",
    usage: "r!dnd",
    example: "r!dnd",
    desc: "Sets your status to dnd."
}