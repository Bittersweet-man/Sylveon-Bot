const Commando = require('discord.js-commando');
const discord = require('discord.js');

class EightBallCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: '8ball',
            group: 'simple',
            memberName: '8ball',
            description: 'Ask the 8 ball a question!'
        });
    }


    async run(message, args) {
        var chance = Math.floor(Math.random() * 20)
        if (chance == 0) {
            var answer = "it is certain."
            
        }
        if (chance == 1) {
            var answer = "It is decidedly so."
        }
        if (chance == 2) {
            var answer = "Without a doubt."
        }
        if (chance == 3) {
            var answer ="Yes - definetely."
        }
        if (chance == 4) {
            var answer ="You may rely on it."
        }
        if (chance == 5) {
            var answer ="As I see it, yes."
        }
        if (chance == 6) {
            var answer ="Most likely."
        }
        if (chance == 7) {
            var answer ="Outlook good."
        }
        if (chance == 8) {
            var answer ="Yes."
        }
        if (chance == 9) {
            var answer ="Signs point to yes."
        }
        if (chance == 10) {
            var answer ="Reply hazy, try again."
        }
        if (chance == 11) {
            var answer ="Ask again later."
        }
        if (chance == 12) {
            var answer ="Better not tell you now."
        }
        if (chance == 13) {
            var answer ="Cannot predict now."
        }
        if (chance == 14) {
            var answer ="Concentrate and ask again."
        }
        if (chance == 15) {
            var answer ="Don't count on it."
        }
        if (chance == 16) {
            var answer ="My reply is no."
        }
        if (chance == 17) {
            var answer ="My sources say no."
        }
        if (chance == 18) {
            var answer ="Outlook not so good."
        }
        if (chance == 19) {
            var answer ="Very doubtful."
        }
        let BEmbed = new discord.RichEmbed()
            .setTitle('8Ball')
            .addField('Result', answer)
            .addField('Requested by', message.author)
            .setTimestamp()
            .setColor('RANDOM')
        message.channel.send({
            embed: BEmbed
        })
    }
}

module.exports = EightBallCommand;