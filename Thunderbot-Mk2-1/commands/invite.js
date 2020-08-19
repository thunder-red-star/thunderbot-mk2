module.exports = {
	name: 'invite',
	description: 'Invite the bot.',
	execute(message) {
    message.channel.send('Make sure to give the bot Administrator permissions or the bot\'s commands will not work.')
		message.channel.send('https://discord.com/oauth2/authorize?client_id=743547904370671706&permissions=8&scope=bot')
	},
};