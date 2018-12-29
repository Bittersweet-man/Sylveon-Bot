const Commando = require('discord.js-commando');

class FunMirrorCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'mirror',
            group: 'simple',
            memberName: 'mirror',
            description: 'Look at your reflection in a mirror!'
        });
    }
        
        
    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = FunMirrorCommand;