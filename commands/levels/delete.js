const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Commando.Client()
const filter = m => m.content.startsWith('');
const dl = require('discord-leveling');

class LyricsCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'delete',
            group: 'levels',
            memberName: 'delete',
            description: 'Delete your profile'
        });
    }


    async run(message, args) {
message.channel.send("Are you sure you want to delete your profile? You'll lose all your levels! If so, respond with \"yes\" Otherwise, respond with \"no\"")





      const msgs = await message.channel.awaitMessages(filter, {
                    max: 2
                })
                .then(async collected => {
                    var response = collected.array()[1];
                    var yesno = response.content
                    if(yesno.toLowerCase() == "yes"){
                      dl.Delete(message.author.id)
                       message.channel.send(message.member.displayName + "'s account has been deleted.")
                       }
                  else{
                   message.reply('You have opted out of deleting your account.') 
                  }
                })
        }

    }



module.exports = LyricsCommand;