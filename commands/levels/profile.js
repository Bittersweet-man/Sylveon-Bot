const Commando = require('discord.js-commando');
const discord = require('discord.js')
var dl = require('discord-leveling')

class EXPCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'profile',
            group: 'levels',
            memberName: 'profile',
            description: 'Get your current profile! Exp and level!'
        });
    }


    async run(message, args) {
        var user = message.mentions.users.first() || message.author
        var output = await dl.Fetch(user.id)
        //message.channel.send(`Hey ${user.tag}! You have ${output.level} level(s)! and ${output.xp} xp!`);
var leaderboard = dl.Leaderboard({search: 'message.author.id'})
        var ProfileEmbed = new discord.RichEmbed()
            .setTitle("Profile")
            .setThumbnail(user.avatarURL)
            .addField("User", user)
            .addField("Level", `${output.level}`)
            .addField("XP", `${output.xp}`)
            .setColor('RANDOM')
            .setFooter("You're rank " + leaderboard + " in the server!")
            .setTimestamp()

        message.channel.send(ProfileEmbed);

    }
};

module.exports = EXPCommand