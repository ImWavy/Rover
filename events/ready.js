var Discord = require("discord.js");
var setTitle = require('console-title');
var center = require('center-align');
var colors = require("colors");
module.exports = async (bot) => {
bot.snipe = new Discord.Collection()

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
    `.cyan, 112));

  setTitle(`Rover Productions | Logged in as ${bot.user.tag}`);

  console.log(center("───────────────────────────────".cyan, 130));
  console.log(center(`[${bot.user.tag}]`.gray, 130));
  console.log(center("───────────────────────────────".cyan, 130));
  console.log(center(`Commands        [${bot.commands.size}]`.gray, 130));
  console.log(center("───────────────────────────────".cyan, 130));

  console.log("  ");
  console.log("  ");
  console.log("  ");

}