const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: '?'
});
class WarnCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'warn',
            group: 'admin',
            memberName: 'warn',
            description: 'warn a user'
        });
    }


    async run(message, args) {
        let warnedUser = message.guild.member(message.mentions.users.first());
        if (!warnedUser) {
            message.channel.send("Sorry, I cound't find that person");
            return;
        }
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        var words = args.split(' ');
        var reason = words.slice(1).join(' ');
        var channel = message.guild.channels.find("name", "modlogs");
        message.channel.send("Alright, user " + warnedUser.displayName + " has been warned.")
        let wEmbed = new discord.RichEmbed()
        .setTitle('Warn')
        .addField('Warned User', warnedUser)
        .addField('Warned By', message.author)
        .addField("Reason", "Warned for \"" + reason + "\"")
        .setDescription("A user was warned!")
        .setTimestamp()
        .setColor(0xFFFF00)
    channel.send({
        embed: wEmbed
    })




    }
}



module.exports = WarnCommand;