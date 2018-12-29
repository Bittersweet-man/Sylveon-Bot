const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: '?'
});

class SubmitCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'joke-submit',
            group: 'simple',
            memberName: 'joke-submit',
            description: 'Submit jokes to Sylveon bot!'
        });
    }


    async run(message, args) {
        message.reply("Yee Haw")
        var channel = message.guild.channels.find("name", "botjokes");
        channel.send(" if(chance == ) { message.reply(\"" + args + "\")};")
    }
}

module.exports = SubmitCommand;