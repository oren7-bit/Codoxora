const discord = require("discord.js");



module.exports = {
  name: "deneme",
  description: "Belirttiğiniz Adresin Trafik Bilgisini Öğrenin.",
  kullanim: "c?trafik <Adres> <Yakınlaştırma Oranı>",
  ornek : "c?trafik Boğaziçi-Köprüsü 12",
  baska: "c?trafik",
  kategori: "deneme",
  execute(client, message, args) {
   message.channel.send("sa")
  }
    }
