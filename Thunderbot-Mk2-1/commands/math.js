const Discord = require('discord.js');
const client = new Discord.Client();
const math = require('mathjs')

module.exports = {
	name: 'math',
	description: 'Calculate something!',
	execute(message) {
  const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);
  let question = args.slice(0).join(' ');
   let result
  try {
    result = math.eval(question)
  } catch (error) {
    console.log('Failed math calculation ' + question + '\nError: ' + e.stack)
    return 'Error while evaluating the math expression.'
  } finally {
    if (isNaN(parseFloat(result))) {
      return 'Invalid Calculation Expression'
    } else {
      return '**Result:** ' + result
    }
  }
	},
};