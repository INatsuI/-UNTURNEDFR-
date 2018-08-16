const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("UFR ")

bot.on("ready", function() {
    bot.user.setActivity(`UFR Aide | BY @Edωɨה#5292 [V 2.0`)
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
            " `NOP` : *NOP*\n" +
            " `NOP` : *NOP*\n" +
            " `NOP` : *NOP*\n" +
            " `NOP` : *NOP*\n" +
            " `NOP` : *NOP*\n" +
            " `NOP` : *NOP*\n" +
            " `NOP` : *NOP*\n" +
            " `NOP` : *NOP*\n" )
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "aide") || message.content.startsWith(prefix + "Aide")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**Akiina**__ : \n" +
        "**[[Akiina]](https://discordapp.com/api/oauth2/authorize?client_id=441314766720598036&scope=bot&permissions=66321471)**\n" +
        "**Ajoutez moi !! Je suis gentil :)**\n" )
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "invite") || message.content.startsWith(prefix + "Invite")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**Invite**__ : \n" +
        "**[[Clic ici]](https://discordapp.com/oauth2/authorize?client_id=479409233998118912&scope=bot&permissions=66321471)**\n" )
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

      if (message.content === "UFR Aykum"){
        message.channel.sendMessage("UFR EST EN MAINTENANCE !");
        console.log("Commande $PACK 1 effectué");
      }

      if (message.content === "UFR Edwin"){
        message.channel.sendMessage("UFR EST EN MAINTENANCE !");
        console.log("Commande $PACK 2 effectué");
      }

      if (message.content === "UFR Sherubrick"){
        message.channel.sendMessage("UFR EST EN MAINTENANCE !");
        console.log("Commande $PACK 4 effectué");
      }

      if (message.content === "UFR Bibicoty"){
        message.channel.sendMessage("UFR EST EN MAINTENANCE !");
        console.log("Commande $PACK 5 effectué");
      }

      if (message.content === "UFR Pil-face"){
        message.channel.sendMessage("UFR EST EN MAINTENANCE !");
        console.log("Commande $PACK BONUS effectué");
      }

      if (message.content === "8462"){
        message.channel.sendMessage("UFR EST EN MAINTENANCE !");
        console.log("Commande $PACK ALPHA effectué");
      }

      if (message.content === "8462"){
        message.channel.sendMessage("UFR EST EN MAINTENANCE !");
        console.log("Commande $PACK ULTRA effectué");
      }

    });
