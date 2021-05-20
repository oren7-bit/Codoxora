const Discord = require("discord.js")
const db = require("quick.db")
const client = new Discord.Client()
/////////////////////////////
//   COMMAND HANDLING     //
////////////////////////////

const config = require("./config.json")
const PREFIX = "c?"

const { readdirSync } = require("fs");
const { join } = require("path");
//CLIENT EVENTS


client.on("warn", info => console.log(info));

client.on("error", console.error)    

client.on("ready", () => {
  console.log("Bot Açıldı!")
})

//DEFINIING
client.commands = new Discord.Collection()
client.prefix = PREFIX
client.queue = new Map();
client.vote = new Map();

//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} //LOADING DONE


//WHEN SOMEONE MESSAGE
client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  


  if(message.content.startsWith(PREFIX)) { //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) //removing prefix from args
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { //TRY TO GET COMMAND AND EXECUTE
  
      client.commands.get(command).execute(client, message, args) 
    //COMMAND LOGS
    console.log(`${message.author.tag} ${client.commands.get(command).name} Adlı Komudu ${message.guild.name} Sunucusunun #${message.channel.name} Kanalında Kullandı!`)
    } catch (err) { //IF IT CATCH ERROR
      console.log(err)
      const hataembed = new Discord.MessageEmbed()
      .setDescription("**Bir Hata İle Karşılaşıldı:" + "`" + `${err}` + "`" + "**")
      .setColor("GREEN")
      message.channel.send(hataembed)
      .then(message => {
        message.delete({ timeout: 10000 })
       })
    }
    
  }
});


client.on("guildCreate", guild => {
  const embed = new Discord.MessageEmbed()
  .setTitle("💖 Beni Sunucuna Eklediğin İçin Teşekkür Ederim!")
  .setDescription("**Beni sunucuna eklediğin için teşekkür ederim :) Eğer yardıma ihtiyacın varsa `c?yardım` komudunu kullanarak komutlarım hakkında bilgi edinebilirsin.**")
  .setColor("RED")
   guild.owner.send(embed)
})


client.login(config.token)