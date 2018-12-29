const Commando = require('discord.js-commando');

class CopyCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'copy',
            group: 'simple',
            memberName: 'copy',
            description: "Have sylveon bot copy what you're saying!"
        });
    }
        
        
    async run(message, args)
    {
       message.channel.send(args) 
       message.delete()
    }
}

module.exports = CopyCommand