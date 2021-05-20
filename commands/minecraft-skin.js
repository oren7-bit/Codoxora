const Discord = require("discord.js");



module.exports = {
  name: "minecraft-skin",
  description: "Belirttiğiniz Minecraft Hesabının Skinini Gösterir.",
  kullanim: "c?minecraft-skin <Hesap Adı>",
  ornek : "c?minecraft-skin SpongeBed",
  baska: "c?minecraft-skin",
  kategori: "deneme",
  execute(client, message, args) {
    let hesap = message.content.split(" ").slice(1).join(" ")
   
   
   
   if(!hesap) return message.reply('Hiçbir Hesap Adı Yazmadın!')
 let api = `https://mc-heads.net/body/${hesap}`
 const embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle(`${hesap} Adlı Kullanıcının Skini`)
   .setImage(api)
 message.channel.send(embed);
  }
}
