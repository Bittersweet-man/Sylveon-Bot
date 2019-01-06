const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Commando.Client()
const filter = m => m.content.startsWith('');
var lyr = require('lyrics-fetcher');

class LyricsCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'lyrics',
            group: 'music',
            memberName: 'lyrics',
            description: 'Get lyrics for any song! Start with "!lyrics <artist name>" replacing <artist name> with the artist\'s name. Then send another message specifying which song.'
        });
    }


    async run(message, args) {
        if (!args) {
            message.channel.send('Please specify an artist!')
            return;
        } else {





            const msgs = await message.channel.awaitMessages(filter, {
                    max: 1
                })
                .then(async collected => {
                    var response = collected.array()[0];
                    var song = response.content
                    setTimeout(function () {
                        lyr.fetch(args, song, function (err, lyrics) {
                            if (lyrics.length > 2000) {
                                var lyrics = lyrics.substring(0, 2000);
                                let words = lyrics.split(2000);
                                message.channel.send('```' + words + '```')
                            } {
                                if (lyrics.length < 2000) {
                                    message.channel.send('```' + lyrics + '```');
                                }
                            } {
                                if (lyrics.length > 2000) {
                                    var lyrics2 = lyrics.slice(-1000);
                                    message.channel.send('```' + lyrics2 + '```')

                                }
                            }

                        });
                    }, 5000);







                })
        }

    }
}


module.exports = LyricsCommand;