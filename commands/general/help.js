const { RichEmbed } = require('discord.js')
const settings = require('../../settings.json')
module.exports.run = async (bot, message, args) => {

    let array = ["general", "user", "activities"]
    let query = args[0]

    if(!bot.commands.get(query) && !array.includes(query)) {
        let groupEmbed = new RichEmbed()

        for(let i = 0; i < array.length; i++) {
           groupEmbed.addField(array[i], `\`\`\`${settings.prefix}help ${array[i]}\`\`\``, true)
        }

        groupEmbed.setColor("#707070")
        groupEmbed.setThumbnail("https://cdn.discordapp.com/icons/764803926851584000/fd775ae7d123cd3bde3280e1330aeaf1.png?size=4096")
        message.channel.send(groupEmbed).then(message => {message.delete(7500)})
        return;
    }

    query = query.toLowerCase()
    if (bot.commands.get(query)) {
       
        let i = bot.commands.get(query)
        let commandEmbed = new RichEmbed()
        .setDescription(`Name: **${i.help.name}**\nDesc: ${i.help.desc}\nExample: ${i.help.example}`)
        .setColor("#707070")
        .setThumbnail("https://cdn.discordapp.com/icons/764803926851584000/fd775ae7d123cd3bde3280e1330aeaf1.png?size=4096")
        message.channel.send(commandEmbed).then(message => {message.delete(7500)})
    } else if(array.includes(query)) {

        const commands = bot.commands.filter(obj => obj.help.group === query)
        
        let commandsEmbed = new RichEmbed()
        .setDescription(commands.map(i => '`' + i.help.name + '`').join(" "))
        .setColor("#707070")
        .setThumbnail("https://cdn.discordapp.com/icons/764803926851584000/fd775ae7d123cd3bde3280e1330aeaf1.png?size=4096")

        message.channel.send(commandsEmbed).then(message => {message.delete(7500)})
    

    }


}

exports.help = {
    name: "help",
    usage: "help <group> | help <command>",
    desc: "Shows a list of commands.",
    group: "general",
    example: "r!help help"
}