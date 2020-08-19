module.exports = {
  name: 'say',
  description: 'Make the bot say what you want it to say!',
  execute(message) {
    var text = message.content.split(' ').slice(1).join(' ');
    if(!text) return message.channel.send('Usage: >say <your text>');
    message.channel.send(text);
    message.delete();
    message.channel.stopTyping()
	}, 
}