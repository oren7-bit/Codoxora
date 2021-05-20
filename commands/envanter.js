const discord = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "envanter",
  description: "Envanterinizde Bulunan Eşyaları Gösterir.",
  kullanim: "c?envanter <Etiket>",
  ornek : "c?envanter @SpongeBed",
  baska: "c?envanter",
  kategori: "deneme",
  execute(client, message, args) {
      const etiket = message.mentions.users.first()
const envanter = db.fetch(`envanter_${message.author.id}`)

function remdupli(data) {
  return[...new Set(data)]
}

var sonuc = remdupli(envanter)


function farkbul(para) {
  var count = {};
  para.forEach(function(para) {
  count[para] = (count[para] || 0) + 1;
  });
  return count;
}

//console.log(findOdd(envanter));

var fayntot = farkbul(envanter)
var fayntot2 = JSON.stringify(fayntot);

var arraybruh = []

for(var key in fayntot){
 // var merhaba = process.stdout.write(key + `(${fayntot[key]})` + " ")
  arraybruh.push(key + `(${fayntot[key]})` + " ")
  
}


//var descript = ``

var desc = null

if(arraybruh.length === 0) {
  desc = "Bu Kullanıcının Hiçbir Eşyası Bulunmamakta"
} else {
  desc = arraybruh
}

const ananembed = new discord.MessageEmbed()
.setDescription(desc)
.setColor("BLUE")
.setAuthor(`${message.author.tag} Adlı Kişinin Envanteri`, message.author.avatarURL( { dynamic: true, format: "png"} ))
message.channel.send(ananembed)


  }
    }
