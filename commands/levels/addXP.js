const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Commando.Client()
const filter = m => m.content.startsWith('');
const dl = require('discord-leveling');

class AddLevelCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'addlevel',
            group: 'levels',
            memberName: 'addlevel',
            description: 'Add level(s) to a User (ADMINS ONLY)'
        });
    }


    async run(message, args) {
              if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }

 let User = message.guild.member(message.mentions.users.first());
      message.channel.send('How many levels would you like to add to ' + User.displayName + '?')
      const msgs = await message.channel.awaitMessages(filter, {
                    max: 2
                })
                .then(async collected => {
                  
                    var response = collected.array()[1];
                    var levels = response.content
                    if(isNaN(levels)){
                      message.reply('That is not a number!')
                      return;
                    }
  
                       dl.AddLevel(User.id, levels)
                  message.channel.send(levels + " levels has been added to " + User + ". Their current profile is now displayed.")
  var output = await dl.Fetch(User.id)
        //message.channel.send(`Hey ${user.tag}! You have ${output.level} level(s)! and ${output.xp} xp!`);

        var ProfileEmbed = new Discord.RichEmbed()
            .setTitle("Profile")
            .setThumbnail(User.avatarURL)
            .addField("User", User)
            .addField("Level", `${output.level}`)
            .addField("XP", `${output.xp}`)
            .setColor('RANDOM')
            .setFooter("You're rank null in the server!")
            .setTimestamp()

        message.channel.send(ProfileEmbed);
                  
                  
                  
                  var channel = message.guild.channels.find(channel => channel.name === "modlogs")
        let lEmbed = new Discord.RichEmbed()
            .setTitle('Level Added')
            .addField('Boosted User', User)
            .addField('Boosted By', message.author)
            .addField("Levels Added", levels)
            .setDescription("A level was added!")
            .setTimestamp()
            .setColor(0x9400D3)
        channel.send({
            embed: lEmbed
        })

                       }
                )
        }

    }



module.exports = AddLevelCommand;