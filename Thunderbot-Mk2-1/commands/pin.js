const { getUserFromMention } = require('../util/getUser')
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'pin',
	description: 'Pin message',
	execute(message) {
   message.pin({ reason: 'important' })
  .catch(console.error)
  message.delete();
	},
};