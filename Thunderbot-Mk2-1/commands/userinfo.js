const { getUserFromMention } = require('../util/getUser')
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'userinfo',
	description: 'Get information about a user.',
	execute(message, client) {
    
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const user = getUserFromMention(args[0], client);
    let nickname = user.displayName;
    const member = message.guild.member(user);

    const userinfoEmbed = new Discord.MessageEmbed()
	  .setColor('#FFCF40')
	  .setTitle('User Info')
	  .setAuthor('Thunder Bot Mk2')
	  .setDescription(`User info of ${user.username}` )
	  .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	  .addFields(
		  { name: `Username`, value: `${user.username}#${user.discriminator}` },
      { name: `User ID`, value: `${user.id}` },
    )
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("Account Created:", `${member.user.createdAt}`)
    .addField("Joined Server:", `${member.joinedAt}`)
    .addField("Administrator?:", `${message.member.hasPermission('ADMINISTRATOR')}`)
    .addFields(
      { name: `User Avatar`, value: `Below!` },
    )
    .setImage(`${user.displayAvatarURL({ dynamic: true })}`)
	  .setTimestamp()
	  .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');

    message.channel.send(userinfoEmbed)
	}
};