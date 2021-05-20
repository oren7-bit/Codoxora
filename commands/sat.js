const discord = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "sat",
  description: "Belirttiğiniz Eşyayı Marketinize Belirttiğiniz Miktarda Koyar.",
  kullanim: "c?trafik <Adres> <Yakınlaştırma Oranı>",
  ornek : "c?trafik Boğaziçi-Köprüsü 12",
  baska: "c?trafik",
  kategori: "deneme",
  execute(client, message, args) {
    
    const envanter = db.fetch(`envanter_${message.author.id}`)
    const satilacak = args[0]
    const tane = args[1]
    const fiyat = args[2]
    if(!satilacak) {
      const bruhmoment = new discord.MessageEmbed()
      .setDescription("Marketine Koymak İçin Bir Eşya Belirlemelisin!")
      .setColor("RED")
      return message.channel.send(bruhmoment)
    }



    if(!tane) {
      const bruhmoment3 = new discord.MessageEmbed()
      .setDescription("Marketine Koyacağın Eşyanın Miktarını Belirlemelisin!")
      .setColor("RED")
      return message.channel.send(bruhmoment3)
    }

    if(isNaN(tane)) {
      const bruhmoment4 = new discord.MessageEmbed()
      .setDescription("Marketine Koyacağın Eşyanın Miktarı Sadece Sayı Olabilir!")
      .setColor("RED")
      return message.channel.send(bruhmoment4)
    }

    const count = envanter.filter(elem => elem === args[0]).length;

    if(args[0] > count) {
      const kandirikci = new discord.MessageEmbed()
      .setDescription("Verdiğin miktar envanterinde bulunan eşya miktarından daha büyük!")
      .setColor("RED")
      return message.channel.send(kandirikci)
    }

if(!fiyat) {
  const bruhmoment2 = new discord.MessageEmbed()
  .setDescription("Marketine Koyacağın Eşya İçin Bir Fiyat Belirlemelisin!")
  .setColor("RED")
  return message.channel.send(bruhmoment2)
}

if(isNaN(fiyat)) {
const bruhmoment5 = new discord.MessageEmbed()
.setDescription("Marketine Koyacağın Eşyanın Fiyatı Sadece Sayı Olabilir!")
.setColor("RED")
return message.channel.send(bruhmoment5)
}

    if(!envanter.includes(args[0])) {
const buesyayokmal = new discord.MessageEmbed()
.setDescription(args[0] + " Eşyasına sahip değilsin!")
.setColor("RED")
return message.channel.send(buesyayokmal)
    }

    const finalres = `${args[0]}(${tane} Tanesi ${fiyat} CodoCoin)`

var esyafiyat = `${esya}: ${fiyat}`

    db.push(`marketekoy_${message.author.id}`, finalres)
  db.push(`esyavetanearray_${message.author.id}`, `${esya}: ${tane}`)
  db.push(`esyavefiyatarray_${message.author.id}`, "esyafiyat")
    db.push(`satinalfiyat_${message.author.id}`, fiyat)
    db.push(`satinalesya_${message.author.id}`, args[0])
   
   var spliceenv =  envanter.splice(envanter.indexOf(args[0]), tane); 
    db.set(`envanter_${message.author.id}`, envanter)
    
    const embedsuccess = new discord.MessageEmbed()
    .setDescription(`${tane} tane ${args[0]} eşyası ${fiyat} CodoCoin kadar fiyat ile marketine eklendi!`)
    .setColor("GREEN")
    message.channel.send(embedsuccess)
  }
    }
