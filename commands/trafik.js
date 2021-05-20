const discord = require("discord.js");
const fetch = require('node-fetch')




module.exports = {
  name: "trafik",
  description: "Belirttiğiniz Adresin Trafik Bilgisini Öğrenin.",
  kullanim: "c?trafik <Adres> <Yakınlaştırma Oranı>",
  ornek : "c?trafik Boğaziçi-Köprüsü 12",
  baska: "c?trafik",
  kategori: "deneme",
  execute(client, message, args) {
   
    if(!args[0]) return message.reply("**Lütfen Bir Şehir Veya Bir Adres Belirtin!**")
    
    
    if(!args[1]) {
      var zoom = 10
    }
    
    
    
    
    if(args[1]) {
      if (args[1] > 23) return message.reply("**Yakınlaştırma Oranı 23'ten Fazla Olamaz!**") 
      zoom = args[1]
    }
    
       if(isNaN(zoom)){
    return message.channel.send('**Girdiğin Yakınlaştırma Argümanı Bir Sayı Değil!**')
  }
    const encodedURI = encodeURI(`https://us1.locationiq.com/v1/search.php?key=pk.2144c7b762f77826b86593e9f8791e56&q=${args[0].toLowerCase()}&limit=1&accept-language=&countrycodes=&dedupe=0&format=json`);
    
    
try {
     fetch(encodedURI)
          .then(res => res.json()).then(body => {
          let { type } = body;

      if(body.error === "Unable to geocode") {
        const geoembed = new discord.MessageEmbed()
        .setDescription("**❌ Böyle Bir Adres Bulunamadı!**")
        .setColor("RED")
        return message.channel.send(geoembed)
      }
         

       const embed = new discord.MessageEmbed() 
       .setAuthor(`${args[0]} İçin Gösterilen Trafik Bilgisi`)
       .setDescription(`**Zoom Oranı: ${zoom}` + "\r\n" + "\r\n" + `Yandex Tarafından Alınan Veriye Göre:**`)
       .setImage(`https://static-maps.yandex.ru/1.x/?lang=tr&ll=${body[0].lon},${body[0].lat}&size=650,450&z=${zoom}&l=map,trf`)
       message.channel.send(embed)
       
       console.log(body[0].lat)

     })
   } catch (ex) {
      message.channel.send("Komudu Çalıştırırken Bir Hata İle Karşılaşıldı.");
    }
   // return client.logger.error(`${ex}`);
  }
    }
