const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("<<")

bot.on("ready", function() {
    bot.user.setActivity(`<<Aide | BY @Edωɨה#5292  [V 1.0]`)
    console.log("UnturnedFR Connecté");
});

bot.login(process.env.TOKEN);


bot.on("message", message => {
    if(message.content.startsWith(prefix + "aide") || message.content.startsWith(prefix + "Aide")) {
        let embed = new Discord.RichEmbed()
        .setColor('#FFFF00')
        .setTitle("__Voici la liste des commandes__:")
        .setThumbnail(message.author.avatarURL)
        .setDescription("__**DIVERS**__ : \n" +
            " `<<NOP` : *NOP* \n" +
            " `<<invite` : *Te donne un lien pour m'invité;* \n" +
            " `<<NOP` : *NOP* \n" )
      message.author.send({embed});
      message.reply(" 📧 Regarde tes messages !");
      }

    if (message.content === "<<unturned"){
        message.channel.sendMessage("NICK TA MERE");
        console.log("Commande Unturned effectué");
    }

    if(message.content.startsWith(prefix + "invite") || message.content.startsWith(prefix + "Invite")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FFFF')
        .setTitle("Invite moi")
        .addField(" 📋 Pour m'ajouter a ton discord ", "[Clique ici]()", true)
        .setFooter(`Réclamé par ${message.author.tag} |  @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

    )};
