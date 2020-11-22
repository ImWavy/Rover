var Discord = require("discord.js");
const fs = require('fs');
var setTitle = require('console-title');
var center = require('center-align');
var colors = require("colors");
const bot = new Discord.Client({
  disableEveryone: true
});
bot.commands = new Discord.Collection();
const settings = require('./settings.json');

bot.login(settings.token).catch((e) => {
  console.log("  ");
  console.log("  ");
  console.log("  ");

  console.clear()
  console.log("  ");
  console.log("  ");
  console.log("  ");
  console.log("  ");
  console.log("  ");
  console.log("  ");
  console.log(center(`
      ██▀███   ▒█████   ██▒   █▓▓█████  ██▀███  
     ▓██ ▒ ██▒▒██▒  ██▒▓██░   █▒▓█   ▀ ▓██ ▒ ██▒
     ▓██ ░▄█ ▒▒██░  ██▒ ▓██  █▒░▒███   ▓██ ░▄█ ▒
     ▒██▀▀█▄  ▒██   ██░  ▒██ █░░▒▓█  ▄ ▒██▀▀█▄  
     ░██▓ ▒██▒░ ████▓▒░   ▒▀█░  ░▒████▒░██▓ ▒██▒
     ░ ▒▓ ░▒▓░░ ▒░▒░▒░    ░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░
       ░▒ ░ ▒░  ░ ▒ ▒░    ░ ░░   ░ ░  ░  ░▒ ░ ▒░
       ░░   ░ ░ ░ ░ ▒       ░░     ░     ░░   ░ 
        ░         ░ ░        ░     ░  ░   ░     
                            ░                  
  `.cyan, 117));

  setTitle(`Rover Productions | Login failed!`);

  console.log(center("─────────────────────────────────────────────────────────────────────────────".red, 130));
  console.log(center(`Failed to login with your token.`.red, 130));
  console.log(center(`Relaunch the bot to refresh settings and to start another attempt.`.red, 130));
  console.log(center(`If this is not the case please check your connection to the internet.`.red, 130));
  console.log(center(`Press any key to reboot or close the window to close the selfbot completely.`.red, 130));
  console.log(center("─────────────────────────────────────────────────────────────────────────────".red, 130));
  console.log(center("  ".red));
  console.log("  ");
  console.log("  "); 
  process.exit(0);
});

fs.readdirSync("./commands").forEach(folders => {
  fs.readdirSync(`./commands/${folders}`).forEach(i => {
    if (!i.endsWith(".js")) return;
    let commandFile = i.split(".")[0].trim()
    bot.commands.set(commandFile, require(`./commands/${folders}/${commandFile}.js`))
  })

})

const evtFiles = fs.readdirSync("./events/")
evtFiles.forEach(file => {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  bot.on(eventName, event.bind(null, bot));
});
