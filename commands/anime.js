const Discord = require("discord.js");



module.exports = {
  name: "anime",
  description: "Belirttiğiniz Anime Dizisi Hakkında Bilgi Edinin.",
  kullanim: "c?anime <Dizi Adı>",
  ornek : "c?anime Darling In The FranXX(Geliştiriciler Olarak Waifu İzlemiyoruz)",
  baska: "c?anime",
  kategori: "deneme",
  execute(client, message, args) {
    var kitsu = require('node-kitsu');
 let basarim =  message.content.split(" ").slice(1).join(" ")
 
 if(!basarim) return message.reply("**Anime Adı Girmelisin!**")
 
  const encodedURI = encodeURI(basarim);
  
  
kitsu.searchAnime(encodedURI, 0).then(results => {
  
  try{
   console.log(results[0].attributes)
  } catch(e) {
    return message.channel.send(`**Böyle Bir Anime Bulunamadı!**`)
  }
  
  var durum1 = null
  
if(results[0].attributes.status === "current") durum1 = "Devam Etmekte"
  if(results[0].attributes.status === "finished") durum1 = "Bitti"
  
  
  var nsfw1 = null
  
  if(results[0].attributes.nsfw === false) nsfw1 = "Hayır"
  if(results[0].attributes.nsfw === true) nsfw1 = "Evet"
  
  var sayi = null
  
  if(results[0].attributes.episodeCount === null) {
    sayi = 0
  } else {
    sayi = results[0].attributes.episodeCount
  }
  
 
  
  const uras = results[0].attributes.totalLength.toString()
  const uras2 = uras.split("-")
  
  //return console.log(results[0].attributes)
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(results[0].attributes.titles.en, results[0].attributes.posterImage.tiny)
  .addField("Japonca Adı", results[0].attributes.titles.ja_jp, true)
  .addField("Bölüm Sayısı", sayi, true)
  .addField("Toplam Bölüm Dakikası", uras2, true)
  .addField("Puan", results[0].attributes.averageRating, true)
  .addField("Rating Derecesi", results[0].attributes.ratingRank, true)
  .addField("NSFW Mi?", nsfw1, true)
  .addField("Durum", durum1, true)
  .setDescription(`**${results[0].attributes.description}**`)
  .setThumbnail(results[0].attributes.posterImage.medium)
  message.channel.send(embed)
  
    //message.channel.send(results[0].attributes.posterImage.medium)
  //console.log(results[0])
});
  }
    }
