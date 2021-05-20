const discord = require("discord.js");

const { prefix } = require('../config.json');



module.exports = {
  name: "denemeyardim",
  description: "Yardım Komudu",
  kullanim: "/denemeyardim <komut adı>",
  ornek: "/denemeyardim trafik",
  baska: "/denemeyardim",
  execute(client, message, args) {
   
            const data = [];
        const { commands } = message.client;

        if(!args.length) {
            data.push("Here is a list of my commands.");
            data.push(`${prefix} ` + commands.map(c => c.name).join(`\n${prefix} `));
            data.push(`\nYou can use ${prefix}help [command name] to get info about a specific command.`);
           // message.channel.send(data);
          
          const embed = new discord.MessageEmbed()
          .setDescription("**📄 Kategoriler**")
          .addField("😂/eğlence", "Eğlence Komutlarını Gösterir.", true)
          //.setDescription(`${prefix}` + commands.map(c => c.name).join(`\n${prefix} `))
          .setColor("RED")
          return message.channel.send(embed)
          
          
           // return;
        }

        const name = args[0];
        const cmd = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if(!cmd){
            message.reply(`${name} İsminde Bir Komut Bulunmamaktadır.`);

            return;
        }

        data.push(`Name: ${cmd.name}`);

        if(cmd.description) data.push(`Description: ${cmd.description}`);
       // if(cmd.aliases) data.push(`Aliases: ${cmd.aliases.join(', ')}`);
 if(cmd.aliases) data.push(`Aliases: ${cmd.kullanim.join(', ')}`);
    
    const bruhembed = new discord.MessageEmbed()
    .setTitle(`**Komut: c?${cmd.name}**`)
    .setDescription(`**Başka Adları:** ${cmd.baska}` + "\r\n" + `**Açıklama:** ${cmd.description}` + "\r\n" + `**Kullanım:** ${cmd.kullanim}` + "\r\n" + `**Örnek:** ${cmd.ornek}`)
    .setColor("RANDOM")
    
        message.channel.send(bruhembed);
 
    }
}
