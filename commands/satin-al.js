const discord = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "satın-al",
  description: "Belirttiğiniz Kişinin Marketinden Eşya Satın Alın.",
  kullanim: "c?satın-al <Etiket> <Eşya>",
  ornek : "c?satın-al @✵ Emin.exe 々 Şifa-Topu",
  baska: "c?satın-al",
  kategori: "deneme",
  execute(client, message, args) {
   const etiket = message.mentions.users.first()
const esya = args[1]
const tane = args[2]
const dbesya = db.fetch(`satinalesya_${etiket.id}`)
const dbtane = db.fetch(`satinaltane_${etiket.id}`)
const dbesyatane = db.get(`esyavetanearray_${etiket.id}`)
const dbesyafiyat = db.fetch(`esyavefiyatarray_${etiket.id}`)

   if(!etiket) {
     const etiketyok = new discord.MessageEmbed()
     .setDescription("Herhangi Bir Eşya Satın Almak İçin Önce Bir Kişiyi Etiketlemelisin!")
     .setColor("RED")
     return message.channel.send(etiketyok)
   }

   if(!esya) {
    const esyayok = new discord.MessageEmbed()
    .setDescription("Herhangi Bir Eşya Satın Almak İçin Önce Bir Eşya Belirtmelisin!")
    .setColor("RED")
    return message.channel.send(esyayok)
   }


if(!tane) {
  const taneyok = new discord.MessageEmbed()
  .setDescription("Herhangi Bir Eşya Satın Almak İçin Önce Bir Miktar Belirtmelisin!")
  .setColor("RED")
  return message.channel.send(taneyok) 
}



if(!dbesya.includes(esya)) {
  const argsesyasiyok = new discord.MessageEmbed()
  .setDescription("Belirttiğin Eşya Kişinin Marketinde Bulunmuyor!")
  .setColor("RED")
  return message.channel.send(argsesyasiyok) 
} 


console.log(dbesyafiyat)





   
  }
    }
