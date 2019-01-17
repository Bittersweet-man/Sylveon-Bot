const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client()

class DMCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'dm',
            group: 'admin',
            memberName: 'dm',
            description: 'DM a person on the server!'
        });
    }


    async run(message, args) {
      if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        var member = message.guild.member(message.mentions.users.first());
        let words = args.split(' ');
        let DMmessage = words.slice(1).join(' ');
        member.send(DMmessage)
      var channel = message.guild.channels.find(channel => channel.name === "modlogs");
      var dEmbed = new discord.RichEmbed()
      .setTitle('DM')
      .addField('DM sent to', member )
      .addField('DM sent by', message.author)
  .addField('Contents', DMmessage)
      .setDescription("A user was sent a dm!")
      .setTimestamp()
      .setColor(0x0000FF)
      
  channel.send({
      embed: dEmbed
  })

      

     
    }}

module.exports = DMCommand;