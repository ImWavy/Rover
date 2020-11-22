var setTitle = require('console-title');
var center = require('center-align');
var colors = require("colors");
module.exports.run = async (bot, message, args) => {

        bot.user.setActivity(null)
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
      
        setTitle(`Rover Productions | Logged out`);
      
        console.log(center("─────────────────────────────────────────────────────────────────────────────".red, 130));
        console.log(center(`Command r!reset was ran by ${message.author.tag}.`.red, 130));
        console.log(center(`Your status and activity will be reset to default by discord api very soon.`.red, 130));
        console.log(center(`Resetting bot configurations to factory defaults..`.red, 130));
        console.log(center(`Relaunch the bot to start it again on factory defaults and start fresh.`.red, 130));
        console.log(center(`Press any key to reboot or close the window to close the selfbot completely.`.red, 130));
        console.log(center("─────────────────────────────────────────────────────────────────────────────".red, 130));
        console.log(center("  ".red));
        console.log("  ");
        console.log("  ");
        console.log("  ");
        bot.destroy()
}



module.exports.help = {
    name: "reset",
    usage: "r!reset",
    example: "r!reset",
    group: "user",
    desc: "Resets the selfbot/settings you made and then closes it."
} 