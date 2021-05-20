const Discord = require("discord.js");
const fetch = require("node-fetch")


module.exports = {
  name: "iss",
  description: "Uluslararası Uzay İstasyonunda Bulunan Astronotların İsimlerini Öğrenin!",
  kullanim: "c?iss",
  ornek : "c?iss",
  baska: "c?iss",
  kategori: "deneme",
  execute(client, message, args) {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(res => res.json()).then(body => {
    let { name, people, number } = body;

fetch(`http://api.open-notify.org/iss-now.json`)
    .then(res => res.json()).then(body => {
    let { latitude, longitude, iss_position } = body;



if(number === 1) {
var descript = `${people[0].name}`
}

if(number === 2) {
var descript = `${people[0].name} 
${people[1].name}`
}

   if(number === 3) {
var descript = `${people[0].name}
${people[1].name} 
${people[2].name}`
}


      if(number === 4) {
var descript = `${people[0].name}
${people[1].name} 
${people[2].name} 
${people[3].name}`
}

         if(number === 5) {
var descript = `${people[0].name}
${people[1].name} 
${people[2].name}
${people[3].name} 
${people[4].name}`
}



            if(number === 6) {
var descript = `${people[0].name} 
${people[1].name}
${people[2].name} 
${people[3].name} 
${people[4].name} 
${people[5].name}`
}

               if(number === 7) {
var descript = `${people[0].name}
${people[1].name}
${people[2].name} 
${people[3].name} 
${people[4].name} 
${people[5].name} 
${people[6].name}`
}


                  if(number === 8) {
var descript = `${people[0].name} 
${people[1].name} 
${people[2].name} 
${people[3].name} 
${people[4].name} 
${people[5].name} 
${people[6].name} 
${people[7].name}`
}

                     if(number === 9) {
var descript = `${people[0].name} 
${people[1].name} 
${people[2].name} 
${people[3].name} 
${people[4].name} 
${people[5].name} 
${people[6].name} 
${people[7].name} 
${people[8].name}`
}


                        if(number >= 10) {
var descript = `${people[0].name}
${people[1].name} 
${people[2].name}
${people[3].name} 
${people[4].name} 
${people[5].name} 
${people[6].name} 
${people[7].name} 
${people[8].name} 
${people[9].name}`
}

//  var dbrol = [1, 2, 3, 4]



const embed = new Discord.MessageEmbed()
.setAuthor(`Uluslararası Uzay İstasyonu`)
.setDescription(`**Şuan Uluslararası Uzay İstasyonunun Konumu: ${iss_position.latitude}, ${iss_position.longitude}**` + "\r\n" + "\r\n" +
           ` :link: Koordinatı Google Maps'den Görün [Tarayıcınızdan Açın](https://maps.google.com/maps?q=${iss_position.longitude},${iss_position.latitude}&z=4)` + "\r\n" + "\r\n" + 
            `:link: Uluslararası Uzay İstasyonunu İçinden Görün! [Tarayıcınızdan Açın](https://www.google.com/maps/space/iss/@29.5602853,-95.0853914,2a,75y,33.74h,95.05t/data=!3m6!1e1!3m4!1szChzPIAn4RIAAAQvxgbyEg!2e0!7i10000!8i5000)` + "\r\n" + "\r\n" + 
             `**Uluslararası Uzay İstasyonundaki Kişiler(${number})**`)

.addField("Uluslararası Uzay İstasyonu", descript)
.setImage("http://www.businessforum.com/nasa01.JPEG")

message.channel.send(embed)

})
})
  }
    }
