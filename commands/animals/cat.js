const Commando = require('discord.js-commando');
const superagent = require('superagent');
const discord = require('discord.js');
const bot = new Commando.Client()

class CatCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'cat',
            group: 'animals',
            memberName: 'cat',
            description: 'Get a nice cat picture!'
        });
    }


    async run(message, args) {
        let msg = await message.channel.send("Generating...")
        let {
            body
        } = await superagent
            .get('https://aws.random.cat/meow')
        //console.log(body.file)
        if (!{
                body
            }) return message.channel.send('I broke! Please try again!')
        let cEmbed = new discord.RichEmbed()
            .setAuthor('Eeevee Bot', message.guild.iconURL)
            .setImage(body.file)
            .setTimestamp()
            .setFooter('Sylveon Bot')
            .setColor('RANDOM')
        // bot.user.displayAvatarURL

        message.delete();
        message.channel.send({
            embed: cEmbed
        })

    }
}

module.exports = CatCommand;