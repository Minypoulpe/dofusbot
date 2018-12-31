const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('guildMemberAdd', member => {
  var role = member.guild.roles.find("name", "Panda")
  member.addRole(role);

});

bot.login('NTI4MzEyMjgzOTM2NDU2NzEx.Dwjaag.AZ-kWh0LTj9-_xflM8-UA-CHOMo');
