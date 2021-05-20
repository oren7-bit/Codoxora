const Discord = require("discord.js");

const fetch = require('node-fetch')

module.exports = {
  name: "minecraft-sunucu",
  description: "Belirttiğiniz Minecraft Sunucusunun Bilgisini Öğrenin.",
  kullanim: "c?minecraft-sunucu <Sunucu IP Adresi>",
  ornek : "c?minecraft-sunucu mc.hypixel.com",
  baska: "c?minecraft-sunucu",
  kategori: "deneme",
  execute(client, message, args) {
    let ulke =  message.content.split(" ").slice(1).join(" ")
    if(!ulke) return message.reply('**Bir Minecraft Sunucu Adresi Girmelisin!**')
    
    if(ulke.includes('ç' || 'Ç' || 'ğ' || 'Ğ' || 'İ' || 'ö' || 'Ö' || 'ş' || 'Ş' || 'ü' || 'Ü' || 'ı')) {
      return message.channel.send('**Minecraft Sunucu Adları Türkçe Karakter İçermemelidir!**')
    }
    
    
    
    
    
  
     fetch(`https://api.mcsrvstat.us/2/${ulke}`)
            .then(res => res.json()).then(body => {
            let { ip, port, name, hostname, version, players, dns } = body;
       
       

            
            
            
                     if(ip === "") return message.channel.send('**Böyle Bir Sunucu Bulunamadı!**')
       
       
      const cevrimici = players.online
       const max = players.max
       
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(`${hostname} Sunucusunun Bilgileri`, `https://eu.mc-api.net/v3/server/favicon/${ulke}`)
                    .setColor(`RANDOM`)
                    .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${ulke}`)
                    .addField(` <a:cimloop:793950853282791464> Sunucu Adresi`, `${hostname}`, true)
                    .addField(` <a:stevevealex:793953248008470558> İp Adresi`, `${ip}`, true)
                    .addField(` <a:chest:793954960240803850> Port`, `${port}`, true)
                    .addField(` <a:golem:793955639624990742> Versiyon`, `${version}`, true)
                    .addField(` <a:buyulukilic:793957113901875201> Çevrimiçi Oyuncu`, `${cevrimici}`, true)
                    .addField(` <:piglin:837304228531666984> Oyuncu Kapasitesi`, `${max}`, true)
                    .setFooter("Bilgiler Her Zaman Doğru Olmayabilir!")
                    message.channel.send(embed)
                 
              
       
       
  
      
            })
      
  }
    }
