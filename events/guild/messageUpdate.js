const { messageEmbed, MessageEmbed } = require("discord.js");
module.exports = async (oldMessage, newMessage) => {
  let embed = new MessageEmbed()
    .setTitle(`New Message Edited!`)
    .setColor(`GREEN`)
    .setDescription(
      `**The User ${oldMessage.author.tag} has edited a message in <#${message.channel.id}>**`
    )
    .addField(`Old Content`, message.content, true)
    .addField(`New Content`, message.content, true);
  let channel = oldMessage.guild.channels.cache.find(
    (ch) => ch.name === "message-logs"
  );
  if (!channel) return;
  channel.send(embed);
};
