const Commando = require('discord.js-commando');
const superagent = require('superagent');
const discord = require('discord.js');
const bot = new Commando.Client()

class DoggoCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'dog',
            group: 'animals',
            memberName: 'dog',
            description: 'Get a nice dog picture!'
        });
    }


    async run(message, args) {
        let msg = await message.channel.send("Generating...")
        let {
            body
        } = await superagent
            .get('https://dog.ceo/api/breeds/image/random')
        //console.log(body.file)
        if (!{
                body
            }) return message.channel.send('I broke! Please try again!')
        let dEmbed = new discord.RichEmbed()
            .setAuthor('Eeevee Bot', message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter('Sylveon Bot')
            .setColor('RANDOM')
        // bot.user.displayAvatarURL

        message.delete();
        message.channel.send({
            embed: dEmbed
        })

    }
}

module.exports = DoggoCommand;