const { getUserFromMention } = require('../util/getUser')
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'kick',
	description: 'Kick a player',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const member = message.mentions.members.first();
		if (!member) {
			return message.reply('You need to mention the user you want to kick him');
		}
    if(message.member.user.id == "691009964570968144") {
            return message.guild.members.kick(member);
    };
    if(!message.member.hasPermission('KICK_MEMBERS') & !message.member.user.id == "691009964570968144") {
            message.channel.send('You have no permissions to do that, dummy!');
            return;
    };

		if (!member.kickable) {
			return message.reply('I can\'t kick this user.');
		}

		return member.kick()
			.then(() => message.reply(`${user.username} was kicked.`))
	},
};