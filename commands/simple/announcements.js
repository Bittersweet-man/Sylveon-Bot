const Commando = require('discord.js-commando');

class AnnouncementsCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'announcements',
            group: 'simple',
            memberName: 'announcements',
            description: 'Get notified for new announcements'
        });
    }


    async run(message, args) {
        if (message.guild.id == 465707591910162432) {
            if (message.member.roles.has('511266254615740437')) {
                message.member.removeRole('511266254615740437')
                message.reply("The announcements role has been removed.")
                return;
            }
            if (!message.member.roles.has('511266254615740437')) {
                message.member.addRole('511266254615740437')
                message.reply('You have recieved the announcements role, and will be notified of new announcements!')
            }
        } else {
            message.channel.send('That command isn\'t available here!')
        }
    }
};

module.exports = AnnouncementsCommand