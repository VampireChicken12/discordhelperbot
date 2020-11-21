const {messageEmbed, MessageEmbed} = require('discord.js')
module.exports=async(message)=>{
    let embed = new MessageEmbed()
    .setTitle(`New Message Deleted!`)
    .setDescription(`**The User ${message.author.tag} has deleted a message in <#${message.channel.id}>**`)
    .addField(`Content`,message.content,true)
    let channel = message.guild.channels.cache.find(ch=>ch.name==="message-logs")
    if(!channel)return;
    channel.send(embed) 
}