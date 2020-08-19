const fs = require('fs')
const Discord = require('discord.js');
const client = new Discord.Client();
const keepAlive = require('./server');
const antispam = require('better-discord-antispam');




const {
	prefix,
} = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.queue = new Map();
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.on('message', msg => {
  client.emit('checkMessage', msg); // This runs the filter on any message bot receives in any guilds.
  
  // Rest of your code
})

console.log(client.commands);

client.once('ready', () => {
	console.log('Ready!');
  antispam(client, {
        limitUntilWarn: 12,
        limitUntilMuted: 15,
        interval: 5000,
        warningMessage: "if you don't stop spamming you will be punished!",
        muteMessage: "was muted for 60s because you're not supposed to spam here!",
        maxDuplicatesWarning: 30,
        maxDuplicatesMute: 40,
        ignoredRoles: [],
        ignoredMembers: ["ThunderRedStar#9546"],
        mutedRole:"muted",
        timeMuted: 10000,
        logChannel: "antispam-logs"
      });
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});


client.on('message', async message => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	try {
		if(commandName == "ban" || commandName == "userinfo" || commandName == "kick") {
			command.execute(message, client);
		}
    else {
			command.execute(message);
		}
	} catch (error) {
		console.error(error);
	}


});

client.on('ready', () => {
    setInterval(() => {
          client.user.setActivity(`${client.guilds.cache.size} servers | Use >help to get started!` , { type: 'WATCHING' });
    }, 5000);
});

keepAlive();
client.login(process.env.TOKEN);