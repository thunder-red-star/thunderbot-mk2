const { get } = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: 'coronavirus',
	description: 'Get coronavirus stats',
  async execute(message) {
    let response = await get("https://covid2019-api.herokuapp.com/total");
    let embed = new MessageEmbed()
      .setTitle("Coronavirus Statistics")
      .setURL(
        "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
      )
      .setAuthor(
        "CoronaVirus",
        "http://www.lynchowens.com/images/blog/Coronavirus-illustration.png")
      .setDescription(
        "Latest info about coronavirus!"
      )
      .addField("🌍 Total Infected", response.data.confirmed)
      .addField("🌍 Total Recovered", response.data.recovered)
      .addField("🌍 Total Dead", response.data.deaths)
      .setFooter("[!] Data might be from yesterday")
      .setColor("#FF0000");
    return await message.channel.send(embed);
  }
};