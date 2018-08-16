const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("UFR ")

bot.on("ready", function() {
    bot.user.setActivity(`UFR Aide | BY @Edωɨה#5292 [V 2.1]`)
    console.log("UFR EST CONNECTE !!");
});

bot.login(process.env.TOKEN);


bot.on("message", message => {
    if(message.content.startsWith(prefix + "aide") || message.content.startsWith(prefix + "Aide")) {
        let embed = new Discord.RichEmbed()
        .setColor('#FFFF00')
        .setTitle("__Voici la liste des commandes__:")
        .setThumbnail(message.author.avatarURL)
        .setDescription("__**UNTURNED FR**__ : \n" +
            " `UFR Staff` : *Te donne la liste du Staff.* \n" +
            " `UFR Invite` : *Te donne le lien d'invitation pour nous faire de la pubs, HI HI.* \n" +
            " `NOP` : *NOP* \n" )
      message.author.send({embed});
      message.reply(" 📧 Regarde tes messages !");
      }

      if(message.content.startsWith(prefix + "aide") || message.content.startsWith(prefix + "Aide")) {
        let embed = new Discord.RichEmbed()
        .setColor('#FF8000')
        .setDescription("__**AUTRES**__ : \n" +
            " `UFR Aykum` : *Donne les informations sur Aykum !*\n" +
            " `UFR Edwin` : *Donne les informations sur Edwin !*\n" +
            " `UFR Sherubrick` : *Donne les informations sur Sherubrick !*\n" +
            " `UFR Bibicoty` : *Donne les informations sur Bibicoty !*\n" +
            " `UFR Pil-face` : *Donne les informations sur Pil-Face !*\n" +
            " `NOP` : *NOP*\n" +
            " `NOP` : *NOP*\n" +
            " `NOP` : *NOP*\n" )
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "aide") || message.content.startsWith(prefix + "Aide")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**Akiina**__ : \n" +
        "**[Akiina](https://discordapp.com/api/oauth2/authorize?client_id=441314766720598036&scope=bot&permissions=66321471)**\n" +
        "**Ajoutez moi !! Je suis gentil :)**\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "invite") || message.content.startsWith(prefix + "Invite")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**Invite**__ : \n" +
        "**[Clic ici](https://discordapp.com/oauth2/authorize?client_id=479409233998118912&scope=bot&permissions=66321471)**\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "Staff") || message.content.startsWith(prefix + "staff")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**Liste du Staff**__ : \n" +
        "**1: AYKUM** LE BIGBOSS !\n" +
        "**2: EDWIN** LE BEAU GOSSE !\n" +
        "**3: SHERUBRICK** LE PETIT FOU !\n" +
        "**4: BIBICOTY** LA PIPELETTE ! \n" +
        "**5: PIL-FACE** LE PROF DE FRANCAIS !\n" +
        "**6: EN RECRUTEMENT**\n" +
        "**7: EN RECRUTEMENT**\n" +
        "**8: EN RECRUTEMENT**\n" +
        "**9: EN RECRUTEMENT**\n" +
        "**10: EN RECRUTEMENT**\n" +
        "Je précise que l'ordre de classement ne VEUT RIEN DIRE !\n" +
        "Une commande existe pour chacun des membres du staff juste à tapé leur prénom (Majuscule comme premiere lettre exemple: UFR Edwin)\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "UFR Aykum") || message.content.startsWith(prefix + "UFR AYKUM")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**AYKUM**__ : \n" +
        "**[Steam](https://steamcommunity.com/id/aykum)**\n" +
        "**[Twitter](https://twitter.com/Aykum_)**\n" +
        "**[YouTube](https://www.youtube.com/channel/UCpliACPkZIM0C1mOwG2zusA)**\n" +
        "**[Twitch](https://www.twitch.tv/aykum)**\n" +
        "**Avoir plus d'informations en tapant: UFR Aykum+**\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "UFR Edwin") || message.content.startsWith(prefix + "UFR EDWIN")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**EDWIN**__ : \n" +
        "**[Steam](https://steamcommunity.com/id/fharze)**\n" +
        "**[Twitter](https://twitter.com/Edw1in)**\n" +
        "**[YouTube](https://www.youtube.com/channel/UCAps7ORuhoV9uxFixvdcYgQ?view_as=subscriber)**\n" +
        "**[Twitch] PAS ENCORE\n" +
        "**Avoir plus d'informations en tapant: UFR Edwin+**\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "UFR Sherubrick") || message.content.startsWith(prefix + "UFR SHERUBRICK")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**SHERUBRICK**__ : \n" +
        "**Steam: \n" +
        "**Twitter: \n" +
        "**YouTube: \n" +
        "**Twitch: \n" +
        "**Avoir plus d'informations en tapant: UFR Sherubrick+**\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "UFR Bibicoty") || message.content.startsWith(prefix + "UFR BIBICOTY")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**BIBICOTY**__ : \n" +
        "**Steam: https://steamcommunity.com/profiles/76561198326255444**\n" +
        "**Avoir plus d'informations en tapant: UFR Bibicoty+**\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "UFR Pil-face") || message.content.startsWith(prefix + "UFR PIL-FACE")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**PIL-FACE**__ : \n" +
        "**Steam: https://steamcommunity.com/id/Pil-Face**\n" +
        "**Twitch: https://www.twitch.tv/elou05**\n" +
        "**Avoir plus d'informations en tapant: UFR Pil-face+**\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

    });