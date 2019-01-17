const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: '?'
});
class KickCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kicks a user'
        });
    }


    async run(message, args) {
        let kickedUser = message.guild.member(message.mentions.users.first());
        if (!kickedUser) {
            message.channel.send("Sorry, I cound't find that person");
            return;
        }
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(kickedUser).kick(reason)
        message.reply("Alright, user " + kickedUser.displayName + " has been kicked.")
        var channel = message.guild.channels.find(channel => channel.name === "modlogs")
        let kEmbed = new discord.RichEmbed()
            .setTitle('Kick')
            .addField('Kicked User', kickedUser)
            .addField('Kicked By', message.author)
            .addField("Reason", "Kicked for \"" + reason + "\"")
            .setDescription("A user was Kicked!")
            .setTimestamp()
            .setColor(0xFFA500)
        channel.send({
            embed: kEmbed
        })





    }
}



module.exports = KickCommand;