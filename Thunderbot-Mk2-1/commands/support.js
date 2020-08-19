const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'support',
	description: 'Invites to the support server!',
	execute(message) {
		const supportEmbed = new Discord.MessageEmbed()
	    .setColor('#FFCF40')
	    .setTitle('Support Server')
	    .setAuthor('Thunder Bot Mk2')
	    .setDescription('Do you need help with the bot? Need to report a bug? Join our support server!' )
	    .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	    .addFields(
		  { name: 'https://discord.gg/QDvqr5a', value: 'Be sure to read the rules!'},
	  )
	    .setTimestamp()
	    .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');
    return message.reply(supportEmbed);
    },
};