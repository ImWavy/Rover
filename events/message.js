const settings = require('../settings.json')

module.exports = async (bot, message) => {

  if (message.author.id !== bot.user.id) return;

  let prefix = settings.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);

  message.delete()
}