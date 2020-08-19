const fs = require('fs')
const Discord = require('discord.js');

const adminEmbed = new Discord.MessageEmbed()
	  .setColor('#FFCF40')
	  .setTitle('List of Admin Commands')
	  .setAuthor('Thunder Bot Mk2')
	  .setDescription('Here\'s the help page for admin commands. You can find usage and help for each admin command here.' )
	  .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	  .addFields(
		  { name: 'Admin Commands', value: '**ban**: This command will ban someone from the server. \nUsage: \`\`>ban <mention>\`\`\n\n**purge**: This command will purge up to 99 messages from a channel. \nUsage: \`\`>purge <number>\`\`\n\n**kick**: This command will kick someone from the server. \nUsage: \`\`>kick <mention>\`\`\n\n' },
	  )
	  .setTimestamp()
	  .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');

const econEmbed = new Discord.MessageEmbed()
	  .setColor('#FFCF40')
	  .setTitle('List of Economy Commands')
	  .setAuthor('Thunder Bot Mk2')
	  .setDescription('Here\'s the help page for economy commands. You can find usage and help for each economy command here.' )
	  .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	  .addFields(
		  { name: 'Economy Commands', value: '**COMING SOON!**' },
	  )
	  .setTimestamp()
	  .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');

const funEmbed = new Discord.MessageEmbed()
	  .setColor('#FFCF40')
	  .setTitle('List of Fun Commands')
	  .setAuthor('Thunder Bot Mk2')
	  .setDescription('Here\'s the help page for fun commands. You can find usage and help for each fun command here.' )
	  .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	  .addFields(
		  { name: 'Fun Commands', value: '**COMING SOON**' },
	  )
	  .setTimestamp()
	  .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');

const miscEmbed = new Discord.MessageEmbed()
	  .setColor('#FFCF40')
	  .setTitle('List of Miscellaneous Commands')
	  .setAuthor('Thunder Bot Mk2')
	  .setDescription('Here\'s the help page for miscellaneous commands. You can find usage and help for each miscellaneous command here.' )
	  .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	  .addFields(
		  { name: 'Miscellaneous Commands', value: '**coronavirus**: This command will display coronavirus statistics.. \nUsage: \`\`>coronavirus\`\`\n\n' },
	  )
	  .setTimestamp()
	  .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');

const musicEmbed = new Discord.MessageEmbed()
	  .setColor('#FFCF40')
	  .setTitle('List of Music Commands')
	  .setAuthor('Thunder Bot Mk2')
	  .setDescription('Here\'s the help page for music commands. You can find usage and help for each music command here.' )
	  .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	  .addFields(
		  { name: 'Music Commands', value: '**nowplaying**: This command will display currently playing music. \nUsage: \`\`>nowplaying\`\`\n\n**play**: This command will play youtube music by URL. \nUsage: \`\`>play <url>\`\`\n\n**skip**: This command will skip a song. \nUsage: \`\`>skip\`\`\n\n**stop**: This command will stop all songs in queue \nUsage: \`\`>stop\`\`\n\n' },
	  )
	  .setTimestamp()
	  .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');

const utilEmbed = new Discord.MessageEmbed()
	  .setColor('#FFCF40')
	  .setTitle('List of Utility Commands')
	  .setAuthor('Thunder Bot Mk2')
	  .setDescription('Here\'s the help page for utility commands. You can find usage and help for each utility command here.' )
	  .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	  .addFields(
		  { name: 'Utility Commands', value: '**emoji**: Displays an emoji by ID \nUsage: \`\`>emoji <id>\`\`\n\n**help**: Displays a help page \nUsage: \`\`>help\`\`\n\n**ping**: Get response time of bot.\nUsage: \`\`>ping\`\`\n\n**poll**: This command will create a basic poll! \nUsage: \`\`>poll <description>\`\`\n\n**say**: This command will say what you ask it to! \nUsage: \`\`>say <text>\`\`\n\n**support**: Displays a link to the support server \nUsage: \`\`>support\`\`\n\n**userinfo**: This command will display basic info about a user. \nUsage: \`\`>userinfo <mention>\`\`' },
	  )
	  .setTimestamp()
	  .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');

module.exports = {
	name: 'h',
	description: 'Access lower-level help pages',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		if (args == 'admin') {
			return message.reply(adminEmbed);
		}

		if (args == 'economy') {
			return message.reply(econEmbed);
		}

    if (args == 'fun') {
			return message.reply(funEmbed);
		}

		if (args == 'misc') {
			return message.reply(miscEmbed);
		}
    
    if (args == 'music') {
			return message.reply(musicEmbed);
		}

		if (args == 'util') {
			return message.reply(utilEmbed);
		}
	},
};