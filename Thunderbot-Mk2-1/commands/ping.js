const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ping',
	description: 'Ping the bot!',
	execute(message) {
    const apiPing = Math.round(message.client.ping);
    const responseTime = Math.round(Date.now() - message.createdTimestamp);
    const pongEmbed = new Discord.MessageEmbed()
	  .setColor('#FFCF40')
	  .setAuthor('Thunder Bot Mk2')
	  .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	  .addFields(
		  { name: 'Pong!', value: `**Response Time:** \`${responseTime}ms\`` },
	  )
	  .setTimestamp()
	  .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');
    message.channel.send(pongEmbed);
	},
};