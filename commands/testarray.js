
const discord = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "testarray",
  description: "Belirttiğiniz Adresin Trafik Bilgisini Öğrenin.",
  kullanim: "c?trafik <Adres> <Yakınlaştırma Oranı>",
  ornek : "c?trafik Boğaziçi-Köprüsü 12",
  baska: "c?trafik",
  kategori: "deneme",
  execute(client, message, args) {
var arraybruhmoment = ["Un", "Un", "Bira", "Kazma", "Anan"]


arraybruhmoment.splice(arraybruhmoment.indexOf(args[0]), args[1]);  
      message.channel.send(arraybruhmoment)
 
  }
    }


