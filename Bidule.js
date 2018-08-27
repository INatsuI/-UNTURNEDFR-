const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("UFR ")

bot.on("ready", function() {
    bot.user.setActivity(`UFR Aide | BY @Edωɨה#5292 [V 2.7]`)
    console.log("UFR EST CONNECTE !!");
});

bot.login(process.env.TOKEN);

bot.on("guildMemberRemove", member => {
  member.guild.channels.find("général").send(`${member} **Je te souhaite la bienvenue sur Unturned France.** `)
})

bot.on("message", message => {
    if(message.content.startsWith(prefix + "aide") || message.content.startsWith(prefix + "Aide")) {
        let embed = new Discord.RichEmbed()
        .setColor('#FFFF00')
        .setTitle("__Voici la liste des commandes__:")
        .setThumbnail(message.author.avatarURL)
        .setDescription("__**UNTURNED FR**__ : \n" +
            " `UFR Staff` : *Te donne la liste du Staff.* \n" +
            " `UFR Invite` : *Te donne le lien d'invitation pour nous faire de la pubs, HI HI.* \n" +
            " `UFR Give` : *@Qui? @Role?.* \n" )
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
        .setColor('#db3328')
        .setDescription("__**Invite**__ : \n" +
        "**[Clic ici](https://discordapp.com/oauth2/authorize?client_id=479409233998118912&scope=bot&permissions=66321471)**\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
      message.author.send({embed});
      message.reply(" 📧 En privé !");
      }

      if(message.content.startsWith(prefix + "Staff") || message.content.startsWith(prefix + "staff")) {
        let embed = new Discord.RichEmbed()
        .setColor('#20c3ff')
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

      if(message.content.startsWith(prefix + "Aykum") || message.content.startsWith(prefix + "AYKUM")) {
        let embed = new Discord.RichEmbed()
        .setColor('#67ff8b')
        .setDescription("__**AYKUM**__ : \n" +
        "**Steam: [Clic ici](https://steamcommunity.com/id/aykum/) **\n" +
        "**Twitch: [Clic ici](https://www.twitch.tv/aykum) **\n" + 
        "**Twitter: [Clic ici](https://twitter.com/Aykum_) **\n" +
        "**YouTube: [Clic ici](https://www.youtube.com/channel/UCpliACPkZIM0C1mOwG2zusA) **\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "Edwin") || message.content.startsWith(prefix + "EDWIN")) {
        let embed = new Discord.RichEmbed()
        .setColor('#67ff8b')
        .setDescription("__**EDWIN**__ : \n" +
        "**Steam: [Clic ici](https://steamcommunity.com/id/Edw1in/) **\n" +
        "**Twitch: [Clic ici](https://www.twitch.tv/edw1in) **\n" + 
        "**Twitter: [Clic ici](https://twitter.com/Edw1in) **\n" +
        "**YouTube: [Clic ici](https://www.youtube.com/channel/UCAps7ORuhoV9uxFixvdcYgQ) **\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "Sherubrick") || message.content.startsWith(prefix + "SHERUBRICK")) {
        let embed = new Discord.RichEmbed()
        .setColor('#67ff8b')
        .setDescription("__**SHERUBRICK**__ : \n" +
        "**Steam: [NON]() **\n" +
        "**Twitch: [NON]() **\n" + 
        "**Twitter: [NON]() **\n" +
        "**YouTube: [NON]() **\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "Bibicoty") || message.content.startsWith(prefix + "BIBICOTY")) {
        let embed = new Discord.RichEmbed()
        .setColor('#67ff8b')
        .setDescription("__**BIBICOTY**__ : \n" +
        "**Steam: [Clic ici](https://steamcommunity.com/profiles/76561198326255444) **\n" +
        "**Twitch: [NON]() **\n" + 
        "**Twitter: [NON]() **\n" +
        "**YouTube: [NON]() **\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "Pil-face") || message.content.startsWith(prefix + "PIL-FACE")) {
        let embed = new Discord.RichEmbed()
        .setColor('#67ff8b')
        .setDescription("__**PIL-FACE**__ : \n" +
        "**Steam: [Clic ici](https://steamcommunity.com/profiles/76561193967792548) **\n" +
        "**Twitch: [Clic ici](https://www.twitch.tv/elou05) **\n" + 
        "**Twitter: [NON]() **\n" +
        "**YouTube: [NON]() **\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "give") || message.content.startsWith(prefix + "Give")) {
        message.delete(message.author)
        let membergiverole = message.mentions.members.first()
        if(!membergiverole) return message.reply("Veuillez mentionner un utilisateur");
        let namerole = message.mentions.roles.first();
        if(!namerole) return message.reply("Veuillez mentionner un role")
            if(!message.member.hasPermission("MANAGE_ROLES")) {
                return message.reply("Tu n'as pas les permisions !").catch(console.error);
            }
            if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
                return message.reply("Je n'ai pas les permissions !")
            }
            membergiverole.addRole(namerole)
            return message.reply(`Le role ${namerole} a bien été add a ${membergiverole}`)
        }

    });