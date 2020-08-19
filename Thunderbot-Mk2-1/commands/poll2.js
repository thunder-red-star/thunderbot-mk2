// Import the discord.js-pagination package
const pollEmbed = require('discord.js-poll-embed');
 
module.exports = {
	name: 'poll2',
	description: 'Create custom poll',
	execute(message) {
    pollEmbed("bot-commands", "hey!", ["how are you", "Good"]);
	},
};
// There you go, now you have poll embeds