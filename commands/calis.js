const discord = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "çalış",
  description: "Seçtiğiniz Meslekte Çalışmanızı Sağlar.",
  kullanim: "c?çalış <Meslek>",
  ornek : "c?çalış Doktor",
  baska: "c?trafik",
  kategori: "deneme",
  execute(client, message, args) {
  const meslek = args[0]
 const aciklama = message.content.split(" ").slice(2).join(" ")
  const kanalid = db.fetch(`reklamkanalid_${message.guild.id}`)

  if(!db.has(`reklamkanalid_${message.guild.id}`)) {
     const bruholdukembed = new discord.MessageEmbed()
     .setDescription("**Bu Komut Kullanılmadan Önce Sunucu Sahibi Çalışma Reklam Kanalı Ayarlamalıdır!**")
     .setColor("RED")
     return message.channel.send(bruholdukembed)
  }

  if(!meslek) {

var meslekler = `Doktor
Barmen
Fırıncı
Çiftçi
Demirci
Madenci
`

      const meslekyok = new discord.MessageEmbed()
      .setAuthor("Meslek Menüsü")
      .addField("Çalışabileceğiniz Meslekler", meslekler)
      .setColor("RANDOM")
      return message.channel.send(meslekyok)
  }

if(!aciklama) {
  const aciklamayok = new discord.MessageEmbed()
  .setDescription("Reklam İçin Bir Açıklama Belirtilmelidir `Örnek: c?çalış Doktor Sunucuda En Ucuz Doktor Hizmeti Burada!`")
  .setColor("RED")
  return message.channel.send(aciklamayok)
}

const doktorembed = new discord.MessageEmbed()
.setDescription(`<#${kanalid}> Kanalında **${aciklama}** Açıklaması İle Reklamın Yapıldı!`)
.setColor("GREEN")


  if(meslek == "Doktor" || meslek == "Demirci" || meslek == "Madenci" || meslek == "Çiftçi" || meslek == "Fırıncı" || meslek == "Barmen") {

      message.channel.send(doktorembed) 

  } else {
      const messagebruuuh = new discord.MessageEmbed()
      .setDescription("Çalışabileceğiniz Meslekler Dışında Başka Bir İşte Çalışamazsın!")
      .setColor("RED")
      return message.channel.send(messagebruuuh)
  }

const gonderilecek = new discord.MessageEmbed()
.setTitle(meslek)
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(aciklama)
.setColor("GREEN")

client.channels.cache.get(kanalid).send(gonderilecek)
  }
    }
