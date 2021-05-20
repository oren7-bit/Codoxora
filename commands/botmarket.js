const discord = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "botmarket",
  description: "Bot markete girer.",
  kullanim: "c?botmarket",
  ornek : "c?botmarket şifa torbası ",
  baska: "c?botmarket",
  kategori: "deneme",
  execute(client, message, args) {
    const esya = message.content.split(" ").slice(1).join(" ")
    const envanter = db.fetch(`envanter_${message.author.id}`)
if(!esya) {
  const esyayok = new discord.MessageEmbed()
  .setDescription("Alacağın Eşyayı Belirtmelisin!")
  .setColor("RED")
  return message.channel.send(esyayok)
}


    
if(esya == "Şifa-Topu" || esya == "Kazma" || esya == "Un" || esya == "Bira" || esya == "Çapa" || esya == "Örs") {

  let para = null
  
    if(esya === "Şifa-Topu") {
    para = 550
        }
      
      if(esya === "Kazma") {
    para = 600
        }
  
      if(esya === "Un") {
    para = 350
        }
  
      if(esya === "Bira") {
    para = 300
        }
  
      if(esya === "Çapa") {
    para = 570
        }
  
          const codocoin = db.fetch(`codocoin_${message.author.id}`)
        if(codocoin < para) {
          const parayokfakir = new discord.MessageEmbed()
          .setDescription(`Bu Eşyayı Satın Alabilmek İçin **${para} CodoCoin**'e ihtiyacın var!`)
          .setColor("RED")
          return message.channel.send(parayokfakir)
        }
      db.subtract(`codocoin_${message.author.id}`, para)
        
     if(esya === "Şifa-Topu") {
     const sifatopu = db.fetch(`sifatopu_${message.author.id}`)
        db.add(`şifatopu_${message.author.id}`, 1)
        db.push(`envanter_${message.author.id}`, "Şifa-Topu")
        }
  
   if(esya === "Kazma") {
     const kazma = db.fetch(`kazma_${message.author.id}`)
        db.add(`kazma_${message.author.id}`, 1)
        db.push(`envanter_${message.author.id}`, "Kazma")
        }
  
    if(esya === "Un") {
     const un = db.fetch(`un_${message.author.id}`)
        db.add(`un_${message.author.id}`, 1)
        db.push(`envanter_${message.author.id}`, "Un")
        }
  
    if(esya === "Bira") {
     const bira = db.fetch(`bira_${message.author.id}`)
        db.add(`bira_${message.author.id}`, 1)
        db.push(`envanter_${message.author.id}`, "Bira")
        }
  
    if(esya === "Çapa") {
     const capa = db.fetch(`capa_${message.author.id}`)
        db.add(`çapa_${message.author.id}`, 1)
        db.push(`envanter_${message.author.id}`, "Çapa")
        }
       
  const embedsuccess = new discord.MessageEmbed()
  .setDescription(`**${esya}** Eşyası **${para}** CodoCoin Karşılığında Satın Aldın!`)
  .setColor("GREEN")
  message.channel.send(embedsuccess)
    

} else {
    const embedwtf = new discord.MessageEmbed()
    .setDescription(`Markette Belirtilen Eşyalar Dışında Eşya Satın Alamazsın!`)
    .setColor("RED")
    return message.channel.send(embedwtf)
}


  }
    }
