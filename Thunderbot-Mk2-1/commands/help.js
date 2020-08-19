const fs = require('fs')
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all available commands.',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed()
	  .setColor('#FFCF40')
	  .setTitle('List of Commands')
	  .setAuthor('Thunder Bot Mk2')
	  .setDescription('Here\'s the help page. You can find usage and help for each command here.' )
	  .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	  .addFields(
		  { name: 'Configuration Commands (Coming Soon)', value: 'COMING SOON!' },
		  { name: 'Admin Commands', value: '\`\`>h admin\`\`', inline: true },
		  { name: 'Economy Commands (Coming Soon)', value: '\`\`>h economy\`\`', inline: true },
      { name: 'Fun Commands', value: '\`\`>h fun\`\`', inline: true },
		  { name: 'Miscellaneous Commands', value: '\`\`>h misc\`\`', inline: true },
      { name: 'Music Commands', value: '\`\`>h music\`\`', inline: true },
		  { name: 'Utility Commands', value: '\`\`>h util\`\`', inline: true },
	  )
	  .setTimestamp()
	  .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');

    message.channel.send(exampleEmbed);
	},
};