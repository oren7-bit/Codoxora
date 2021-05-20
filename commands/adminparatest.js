const discord = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "adminparatest",
  description: "Belirttiğiniz Adresin Trafik Bilgisini Öğrenin.",
  kullanim: "c?trafik <Adres> <Yakınlaştırma Oranı>",
  ornek : "c?trafik Boğaziçi-Köprüsü 12",
  baska: "c?trafik",
  kategori: "deneme",
  execute(client, message, args) {
   db.add(`codocoin_${message.author.id}`, 1000)


  }
    }
