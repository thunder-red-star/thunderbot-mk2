const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'purge',
	description: 'Delete messages',
	async execute(message, client) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply('Usage: >purge <number> (max 100)')
		}
        
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.user.id == "691009964570968144") {
            message.channel.send('You have no permissions to do that, dummy!');
            return;
    };
		if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
			return message.reply('Please provide a number between 2 and 100 for the number of messages to delete');
    }
    if(message.member.user.id == "691009964570968144") {
            		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
    };

		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    const purgeEmbed = new Discord.MessageEmbed()
	    .setColor('#FFCF40')
	    .setAuthor('Thunder Bot Mk2')
	    .setThumbnail('https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815')
	    .addFields(
		  { name: 'Success!', value: `:white_check_mark: Purged ${deleteCount} messages`},
	  )
	    .setTimestamp()
	    .setFooter('Thunder Bot Mk2', 'https://vignette1.wikia.nocookie.net/objectadversity/images/d/d2/Awesome_Face_Pose.png/revision/latest?cb=20160608062815');
    return message.reply(purgeEmbed);
	},
};