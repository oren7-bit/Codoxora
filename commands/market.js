const discord = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "market",
  description: "Belirttiğiniz Kişinin Marketini Gösterir.",
  kullanim: "c?market <Etiket>",
  ornek : "c?market @✵ Emin.exe",
  baska: "c?market",
  kategori: "deneme",
  execute(client, message, args) {
   const etiket = message.mentions.users.first()

   if(!etiket) {
    const envanter = db.fetch(`marketekoy_${message.author.id}`)

    function removeDuplicates(data) {
      return[...new Set(data)]
    }
    
    var sonuc = removeDuplicates(envanter)
    
    if(!envanter) {
      const ananembed2 = new discord.MessageEmbed()
      .setDescription("Bu Kullanıcının Hiçbir Eşyası Bulunmamakta")
      .setColor("BLUE")
      .setAuthor(`${message.author.tag} Adlı Kişinin Marketi`, message.author.avatarURL( { dynamic: true, format: "png"} ))
      message.channel.send(ananembed2)
    } else {
      desc = arraybruh
    }

    function findOdd(para) {
      var count = {};
      para.forEach(function(para) {
      count[para] = (count[para] || 0) + 1;
      });
      return count;
    }
    
    //console.log(findOdd(envanter));
    
    var fayntot = findOdd(envanter)
    var fayntot2 = JSON.stringify(fayntot);
    
    var arraybruh = []
    
    for(var key in fayntot){
     // var merhaba = process.stdout.write(key + `(${fayntot[key]})` + " ")
      arraybruh.push(key + " ")
      
    }
    
    
    //var descript = ``
    
    


    

    
    const ananembed = new discord.MessageEmbed()
    .setDescription(arraybruh)
    .setColor("BLUE")
    .setAuthor(`${message.author.tag} Adlı Kişinin Marketi`, message.author.avatarURL( { dynamic: true, format: "png"} ))
    message.channel.send(ananembed)
   }

//////////////////////////////////////////////////////////////////////////////////////////////

   if(etiket) {
    const envanter2 = db.fetch(`marketekoy_${etiket.id}`)

    function removeDuplicates(data) {
      return[...new Set(data)]
    }
    
    var sonuc = removeDuplicates(envanter2)
    

    var desc = null
    
    if(!envanter2) {
      const ananembed1 = new discord.MessageEmbed()
      .setDescription("Bu Kullanıcının Hiçbir Eşyası Bulunmamakta")
      .setColor("BLUE")
      .setAuthor(`${etiket.tag} Adlı Kişinin Marketi`, etiket.avatarURL( { dynamic: true, format: "png"} ))
     return message.channel.send(ananembed1)
    } else {
      desc = arraybruh
    }

      var count = {};
      envanter2.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    

    
    //console.log(findOdd(envanter));
    
    var fayntot = count
    var fayntot2 = JSON.stringify(fayntot);
    
    var arraybruh = []
    
    for(var key in fayntot){
     // var merhaba = process.stdout.write(key + `(${fayntot[key]})` + " ")
      arraybruh.push(key + " ")
      
    }
    
    
    //var descript = ``
    

    
    const ananembed = new discord.MessageEmbed()
    .setDescription(arraybruh)
    .setColor("BLUE")
    .setAuthor(`${etiket.tag} Adlı Kişinin Marketi`, etiket.avatarURL( { dynamic: true, format: "png"} ))
    message.channel.send(ananembed)
   }

  }
    }
