const { getUserFromMention } = require('../util/getUser')
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ban',
	description: 'Ban a player',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const member = getUserFromMention(args[0], client);
    if(!message.member.hasPermission('BAN_MEMBERS') & !message.member.user.id == "691009964570968144") {
            message.channel.send('You have no permissions to do that, dummy!');
            return;
     };
    if(message.member.user.id == "691009964570968144") {
            return message.guild.members.ban(member);
    };
		if (!member) {
			return message.reply('You need to mention the member you want to ban him');
		}

		if (!member.kickable) {
			return message.reply('I can\'t ban this user.');
		}
    const banEmbed = new Discord.MessageEmbed()
	    .setColor('#FF0000')
	    .setAuthor('Thunder Bot Mk2')
	    .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	    .addFields(
		  { name: 'Success!', value: `Banned ${member.username}!`},
	  )
	    .setTimestamp()
	    .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');
    return message.guild.members.ban(member)
    .then(() => message.reply(banEmbed))
	},
};