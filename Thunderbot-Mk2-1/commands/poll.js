const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'poll',
	description: 'Creates a poll',
	async execute(message) {
		const messageArray = message.content.split(' ');
	  const cmd = messageArray[0];
	  const args = messageArray.slice(1);    
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(0).join(' ');
    let embedPoll = new Discord.MessageEmbed()
   .setTitle('New Poll!')
   .setDescription(pollDescription)
   .setColor('YELLOW')
   let msgEmbed = await message.channel.send(embedPoll);
   await msgEmbed.react('🔺')
   await msgEmbed.react('🔻')
    },
};