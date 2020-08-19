const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'changelog',
	description: 'Gets the current version of the bot',
	execute(message) {
		const supportEmbed = new Discord.MessageEmbed()
	    .setColor('#FFCF40')
	    .setTitle('Changelog')
	    .setAuthor('Thunder Bot Mk2')
	    .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	    .addFields(
		  { name: 'Version 0.3.0', value: '> Added poll command: Use >poll <description>\n> Updated Help'},
	  )
	    .setTimestamp()
	    .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');
    return message.reply(supportEmbed);
    },
};