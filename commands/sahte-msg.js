const discord = require("discord.js");



module.exports = {
  name: "sahte-msg",
  description: "Etiketlediğiniz Kişinin Adı İle Mesaj Gönderir.",
  kullanim: "c?sahte-msg <Etiket> <Sahte Mesajınız>",
  ornek : "c?sahte-msg @SpongeBed bu bir sahte mesaj!",
  baska: "c?sahte-msg",
  kategori: "deneme",
  execute(client, message, args) {
if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const manageyok = new discord.MessageEmbed()
    .setDescription("**Bu komudu kullanabilmen için benim `Mesajları Yönet` yetkisine sahip olmam gerek!**")
    .setColor("RED")
    return message.channel.send(manageyok)
}

if(!message.guild.me.hasPermission("MANAGE_WEBHOOKS")) {
    const webhookyok = new discord.MessageEmbed()
    .setDescription("**Bu komudu kullanabilmen için benim `Webhookları Yönet` yetkisine sahip olmam gerek!**")
    .setColor("RED")
    return message.channel.send(webhookyok)
}

    client.channels.cache.get(message.channel.id).messages.fetch(message.id).then(message => message.delete())
    let member = message.mentions.users.first() 

 if (!member) return message.channel.send("**Birini Etiketlemelisin.**")
 let botmsg = message.content.split(" ").slice(2).join(" ")
 if (!botmsg) return message.channel.send("Sahte Mesajını Girmelisin")
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Bu Komudu Kullanmak İçin Gerekli İzinlerin Yok.**")
if(member.bot) return message.channel.send('**Botlara Sahte Mesaj Attıramazsın!**')
 message.channel.createWebhook(member.username, { avatar: member.displayAvatarURL({ format: "png" }) }).then(webhook => {
     if (message.member.hasPermission("ADMINISTRATOR")) {
         webhook.send(botmsg, {
             disableEveryone: false
         })
         setTimeout(() => webhook.delete(), 5000)
     } else {
         webhook.send(botmsg, {
             disableEveryone: true
         })
         setTimeout(() => webhook.delete(), 5000)
     }

})
  }
    }
