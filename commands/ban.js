const discord = require("discord.js");




module.exports = {
  name: "ban",
  description: "Etiketlediğiniz Kişiyi Sunucudan Yasaklar.",
  kullanim: "c?ban",
  ornek : "c?ban @SpongeBed spam/flood",
  baska: "c?ban",
  kategori: "deneme",
  execute(client, message, args) {
   

    
  var guild = message.guild;
  var banlayan = message.author.tag;
  let banxx = message.guild.fetchBans();
   var kisi = message.mentions.members.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]); 
     var sebeb = args.slice(1).join(" ");
    
    
     if (!message.member.hasPermission("BAN_MEMBERS")) {
        const embedecelavsorkunverimuch2 = new discord.MessageEmbed()
          .setDescription("**❌ Herhangi Bir Kişi Banlamak İçin `Üyeleri Engelle` İznine Sahip Olmalısın!**")
          .setColor("RED")
          return message.channel.send(embedecelavsorkunverimuch2)
     }


       
      if(!kisi) {
    const embedbruh = new discord.MessageEmbed()
    .setDescription("**❌ Belirttiğiniz Kişi Sunucuda Yok Veya Banlamak İçin Herhangi Bir Kişi Belirtmedin!**")
    .setColor("RED")
    return message.channel.send(embedbruh)
            
  }
      
    if(!message.author.id !== message.guild.ownerID) {  
  if(message.member.roles.highest.comparePositionTo(message.mentions.members.first().roles.highest) <= 1) {
    const orkunileecekumrular = new discord.MessageEmbed()
    .setDescription("**❌ Bu Kişi Rol Sıralamasında Senden Yüksekte Veya Eşit Bu Sebeple Onu Banlayamazsın!**")
    .setColor("RED")
    return message.channel.send(orkunileecekumrular) // no no
     }
    }


     if(kisi.id == message.guild.ownerID) {
        const orkunileecekumrudeil = new discord.MessageEmbed()
   .setDescription("**❌ Bu Kişi Sunucu Sahibi Onu Banlayamazsın!**")
   .setColor("RED")
   return message.channel.send(orkunileecekumrudeil) // no no
      }
                    
          if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
       const embedecelavsorkunverimuch = new discord.MessageEmbed()
       .setDescription("**❌ Herhangi Bir Kişi Banlamak İçin `Üyeleri Engelle` İznine Sahip Olmalıyım!**")
       .setColor("RED")
       return message.channel.send(embedecelavsorkunverimuch)
     }
          
      
          if(!kisi.bannable) {
      const orkunileecebirbirinisevmiyorsadfeys = new discord.MessageEmbed()
 .setDescription("**❌ Bu Kişiyi Banlayamam!**")
 .setColor("RED")
 return message.channel.send(orkunileecebirbirinisevmiyorsadfeys)
    }

          
          
         var now = new Date()
 var baban = null
 
 if(!sebeb) {
   baban = "Sebep Belirtilmemiş."
 }    
 if(sebeb) {
   baban = sebeb
 }   
         try {
           const embedorkuncoklavsece = new discord.MessageEmbed()
           .setDescription(`${kisi} **${guild}** Adlı Sunucudan Banlandın.` + "\r\n" + `**Sebep: ${baban}**`)
           .setColor("RED")
          kisi.send(embedorkuncoklavsece)
           const orkunileece = new discord.MessageEmbed()
           .setDescription(`✅ ${kisi} **Adlı Kullanıcı ${baban} Sebebi İle Banlandı.**`)
           .setColor("GREEN")
          message.channel.send(orkunileece)
          return guild.members.ban(kisi, { reason: sebeb/*, days: gun*/});
        } catch (error) {
          message.reply("**Bir Hata İle Karşılaşıldı Birkaç Dakika İçinde Tekrar Deneyin Eğer Bu Sorununuza Çözüm Olmadıysa Bir Geliştirici Veya Yetkiliye Bildirin!**")
          console.log(error)
        }  
          
          
          
          
      
      
    

  }
    }
