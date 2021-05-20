const discord = require("discord.js");



module.exports = {
  name: "twitch",
  description: "Belirttiğiniz Adresin Trafik Bilgisini Öğrenin.",
  kullanim: "c?trafik <Adres> <Yakınlaştırma Oranı>",
  ornek : "c?trafik Boğaziçi-Köprüsü 12",
  baska: "c?trafik",
  kategori: "deneme",
  execute(client, message, args) {
    var api = require('twitch-api-v5');
 
    api.clientID = 'udj1ydvblgee2ddwlstkw7134lyyuw';
     
    api.user.getByID({ userID: '12826' }, (err, res) => {
        if(err) {
            console.log(err);
        } else {
            console.log(res);
            /* Example response
            {
                display_name: 'Twitch',
                _id: '12826',
                name: 'twitch',
                type: 'user',
                ...
            }
            */
        }
    });
     
    api.feed.createPost({ auth: 'OAuth ...', channelID: '12826', post: 'New Post!' }, (err, res) => {
    
    });
  }
    }
