const discord = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "reklam-ayarla",
  description: "Çalışma Komudunda Yapılan Reklamları Ayarlanan Kanallara Gönderir.",
  kullanim: "c?reklam-ayarla <Kanal Etiketi>",
  ornek : "c?reklam-ayarla #reklamkanali",
  baska: "c?reklam-ayarla",
  kategori: "deneme",
  execute(client, message, args) {
const etiket = message.mentions.channels.first()


    if(message.guild.ownerID !== message.author.id) {
const guildonwerdegil = new discord.MessageEmbed()
.setDescription("**Bu Komudu Kullanabilmen İçin Sunucu Sahibi Olmalısın!`**")
.setColor("RED")
return message.channel.send(guildonwerdegil)
    }

if(!etiket) {
    const etiketyok = new discord.MessageEmbed()
    .setDescription("**Bu Komudu Kullanabilmen İçin Bir Kanal Belirtmelisin!**")
    .setColor("RED")
    return message.channel.send(etiketyok)   
}
db.fetch(`reklamkanalid_${message.guild.id}`, `${etiket.id}`)
db.set(`reklamkanalid_${message.guild.id}`, `${etiket.id}`)

const successembed = new discord.MessageEmbed()
.setDescription(`**Başarıyla Çalışma Reklam Kanalı <#${etiket.id}> Kanalı Olarak Ayarlandı!**`)
.setColor("GREEN")
message.channel.send(successembed)

  }
    }


