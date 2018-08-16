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

      if(message.content.startsWith(prefix + "846259637891ban")) {
        var member= message.mentions.members.first();
        // Ban
        member.ban().then((member) => {
        // Successmessage
        message.channel.send(" ✅ " + member.displayName + " **C'est bon, il reviendra plus.** :wave: ");
        }).catch(() => {
        // Failmessage
        message.channel.send(" ❌ **hep hep, Ta pas les permissions !**");
        })
    }

    if(message.content.startsWith(prefix + "846259637891kick")) {
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
        // Successmessage
        message.channel.send(" ✅ " + member.displayName + " **Je les dégager mais fait gaf il peut revenir.** :wave: ");
        }).catch(() => {
        // Failmessage
        message.channel.send(" ❌ **hep hep, Ta pas les permissions !**");
        })
    }

    if (message.content.startsWith( prefix + "8462")) {
        if(message.member.hasPermission("ADMINISTRATOR")){
        var msg = message.content.substr('4')
        message.delete(message.author);
        message.channel.send(msg);
    }
}

    if(message.content.startsWith(prefix + "owner")) {
        var d = new Date()
        let embed = new Discord.RichEmbed()
        .setColor('#5F04B4')
        .setTitle("Mon créateur: @Edωɨה#5292 ")
        .setFooter(`Demandé par ${message.author.tag} | @Edωɨה#5292  `)
        .setTimestamp()
            message.channel.send({embed})
    }

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()) {
        case "846259637891play":
        var argsplay = message.content.substring(prefix.length).split(" ");
            if (!argsplay[1]) {
                message.channel.sendMessage("Merci d'envoyer le lien.");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.sendMessage("Tu dois être dans un channel vocal.");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(argsplay[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
                message.channel.send("Lancement de votre musique. \n En cas de problème, vérifier si c'est un lien ( et non un teste ), si celle-ci n'a pas de copyright ou est correcte.")
            });
            break;
        case "846259637891skip":
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            message.channel.send("Musique skipé !\nEn cas de problème, vérifier si c'est un lien ( et non un teste ), si celle-ci n'a pas de copyright ou est correcte.")
            break;
        case "846259637891stop":
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            message.channel.send("Musique arrêté.")
            break;
            case "avatar":
            if (!message.mentions.users.first()) return message.channel.send("**Merci de mentionner un utilisateur**")
                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                let ava = user.displayAvatarURL
                let embed = {
                color:0x000000,
                description:"Merci d'installer Akiina pour faire cela",
                image:{url:ava}
                }
            message.channel.send("", {embed})
            break;
            case "clear":
           if (message.member.hasPermission("MANAGE_MESSAGES")) {
               message.channel.fetchMessages()
                  .then(function(list){
                       message.channel.bulkDelete(list);
                   }, function(err){message.channel.send("Erreur")})}
               break;
               case "kick":
           let command = message.content.split(" ")[0];
           const args = message.content.slice(prefix.length).split(/ +/);
           command = args.shift().toLowerCase();
    
               if(!message.member.hasPermission("KICK_MEMBERS")) {
                   return message.reply("❌ **hep hep, Ta pas les permissions !**").catch(console.error);
               }
               if(message.mentions.users.size === 0) {
                   return message.reply("**Merci de mentionner l'utilisateur à expluser.**").catch(console.error);
               }
               let kickMember = message.guild.member(message.mentions.users.first());
               if(!kickMember) {
                   return message.reply("**Cet utilisateur est introuvable ou impossible à expulser.**")
               }
               if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                   return message.reply("**Je n'ai pas la permission KICK_MEMBERS pour faire ceci.**").catch(console.error);
               }
               kickMember.kick().then(member => {
                   message.reply(" ✅ " + member.displayName + " **Je les dégager mais fait gaf il peut revenir.** :wave: ").catch(console.error);
               }).catch(console.error)
           break;
           case "ban":
           let commande = message.content.split(" ")[0];
           const argse = message.content.slice(prefix.length).split(/ +/);
           commande = argse.shift().toLowerCase();
           if(!message.member.hasPermission("BAN_MEMBERS")) {
               return message.reply("❌ **hep hep, Ta pas les permissions !**").catch(console.error);
           }
           const member = message.mentions.members.first();
           if (!member) return message.reply("**Merci de mentionner l'utilisateur à bannir.**");
           member.ban().then(member => {
               message.reply(" ✅ " + member.displayName + " **C'est bon, il reviendra plus.** :wave: ").catch(console.error);
           }).catch(console.error)
           break;
           case "UFRP":
           if (message.member.hasPermission("MANAGE_MESSAGES")) {
               let args = message.content.split(" ").slice(1);
               let thingToEcho = args.join(" ")
               if (!thingToEcho) return message.reply("**hmmm...Je crois que ta oublier la question** :thinking: ")
               if (!message.guild.channels.find("name", "sondage")) return message.reply("**Si tu veux faire un sondage tu dois d'habord créer un channel sondage !**")
               var embedeee = new Discord.RichEmbed()
                   .setDescription("Sondage")
                   .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                   .setColor("0xB40404")
                   .setTimestamp()
           message.channel.sendMessage("**Votre sondage a bien été envoyé dans #sondage.**")
           message.guild.channels.find("name", "sondage").sendEmbed(embedeee)
           .then(function (message) {
               message.react("✅")
               message.react("❌")
           }).catch(function() {
           });
           }else{
               return message.reply("❌ **Ta pas les permissions !**")}
           break;
           case "8ball":
           let argsed = message.content.split(" ").slice(1);
           let tte = argsed.join(" ")
           if (!tte){
               return message.reply("**hmmm...Je crois que ta oublier la question** :yum: ")};

                        var replys8 = [
                            '#F407FC', 
                            '#034EEF',
                            '#09F4D1',
                            '#09F14E',
                            '#E7EF07',
                            '#F5A718',
                            '#FB4B06',
                            '#FB2702',
                            '#F6F4F3',
                            '#201F1F'
                        ];
                    
                        let reponse8 = (replys8[Math.floor(Math.random() * replys8.length)])
    
               var replys = [
               "Oui.",
               "Non.",
               "Je ne sais pas.",
               "Peut-être.",
               "Probablement."
               ];
           
               let reponse = (replys[Math.floor(Math.random() * replys.length)])
               var ballembed = new Discord.RichEmbed()
               .setDescription("Akiina :heart:")
               .addField("Question", tte)
               .addField("Réponse", reponse)
               .setColor(reponse8)
           message.channel.sendEmbed(ballembed)
               break;
            }});