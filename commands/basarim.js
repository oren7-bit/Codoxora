const Discord = require("discord.js");



module.exports = {
  name: "başarım",
  description: "Belirttiğiniz Kelime Veya Cümleyi Minecraft Başarımı Olarak Yazar.",
  kullanim: "c?başarım <Kelime/Cümle>",
  ornek : "c?başarım Pineapple Pizza!",
  baska: "c?başarım",
  kategori: "deneme",
  execute(client, message, args) {
   
   
    let basarim =  message.content.split(" ").slice(1).join(" ")
    if(basarim.length > 22 || basarim.length === 22) return message.reply('**Gireceğin Kelime/Cümle En Fazla 22 Karakter Uzunluğunda Olmalı!**')
   
   if(!basarim) return message.reply('**Hiçbir Kelime/Cümle Belirtmedin!**')
   

   const basarim2 = basarim.split(' ').join('+')

   
   const embed = new Discord.MessageEmbed()
   
   .setTitle("Başarım Kazanıldı")
   .setImage(`https://minecraftskinstealer.com/achievement/10/Basarim+Kazanildi%21/${basarim2}`)
   
   message.channel.send(embed)
  
  }
    }
